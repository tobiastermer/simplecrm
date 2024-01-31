import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, query, where, limit, orderBy, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from './../../models/user.class'
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    users: User[] = [];
    subscribeUsers;
    subscribeUser?: () => void;
    firestore: Firestore = inject(Firestore);
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    currentUser = this.currentUserSubject.asObservable();

    constructor() {
        this.subscribeUsers = this.getAllUsers();
        this.subscribeUser;
    }

    async addUser(item: {}) {
        try {
            const docRef = await addDoc(collection(this.firestore, "users"), item);
            return docRef.id;
            console.log(docRef.id);
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    getAllUsers() {
        const q = query(collection(this.firestore, 'users'));
        return onSnapshot(q, (list) => {
            this.users = [];
            list.forEach(element => {
                this.users.push(this.setUserObject(element.data(), element.id));
                console.log(this.users);

            });
        });
    }

    getUser(id: string) {
        const userDocRef = doc(this.firestore, "users", id);
        this.subscribeUser = onSnapshot(userDocRef, (documentSnapshot) => {
            if (documentSnapshot.exists()) {
                const user = this.setUserObject(documentSnapshot.data(), documentSnapshot.id);
                // Aktualisieren des currentUserSubject mit dem neuen User-Objekt
                this.currentUserSubject.next(user);
            } else {
                // Handhabung, falls kein User mit der ID gefunden wurde
                console.log(`No user found with id: ${id}`);
                this.currentUserSubject.next(null);
            }
        });
    }

    getCleanJSON(user: User): {} {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            birthDate: user.birthDate,
            street: user.street,
            zipCode: user.zipCode,
            city: user.city,
        }
    }

    setUserObject(obj: any, id: string): User {
        return {
            id: id,
            firstName: obj.firstName || "",
            lastName: obj.lastName || "",
            birthDate: obj.birthDate || 0,
            email: obj.email || "",
            street: obj.street || "",
            zipCode: obj.zipCode || 0,
            city: obj.city || "",
        }
    }


}

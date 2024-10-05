import app from "../firebaseConfig";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getAllChallenges = async () => {
    const challengesList = collection(db, "challenges");
    const challengesSnapshot = await getDocs(challengesList);
    const challenegesList = challengesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return challenegesList;
};

export const getChallenge = async (challenegeId) => {
    const challengeRef  = doc(db, "challenges", challenegeId);
    const challengeDoc = await getDoc(challengeRef);
    if (challengeDoc.exists()) {
        return { id: challengeDoc.id, ...challengeDoc.data() };
    } else {
        return null; // Challenge not found
    }
}

export const addChallenge = async (challengeId, challengeData) => {
    const challengeRef = doc(db, "challenges", challengeId);
    try {
        await setDoc(challengeRef, challengeData);
        console.log("Challenge added successfully");
    } catch (error) {
        console.error("Error adding challenge:", error);
    }
};

export const addParticipant = async (challengeId, userId) => {
    const challengeRef = doc(db, "challenges", challengeId);
    try {
        await updateDoc(challengeRef, {
            participants: arrayUnion(userId) // Add userId to the participants array
        });
        console.log("Participant added successfully");
    } catch (error) {
        console.error("Error adding participant:", error);
    }
};

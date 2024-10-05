import app from "../firebaseConfig";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const getAllActivities = async () => {
    const activitiesList = collection(db, "activities");
    const activitiesSnapshot = await getDocs(activitiesList);
    const activities = activitiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return activities;
};

// Fetch activities for a specific user
export const getUserActivities = async (userID) => {
    const activitiesQuery = query(collection(db, "activities"), where("userID", "==", userID));
    const activitiesSnapshot = await getDocs(activitiesQuery);
    const activities = activitiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return activities;
};

// Add a new activity
export const addActivity = async (activityID, activityData) => {
    const activityRef = doc(db, "activities", activityID);
    try {
        await setDoc(activityRef, activityData);
        console.log("Activity added successfully");
    } catch (error) {
        console.error("Error adding activity:", error);
    }
};

// Update an activity
export const updateActivity = async (activityID, updatedData) => {
    const activityRef = doc(db, "activities", activityID);
    try {
        await updateDoc(activityRef, updatedData);
        console.log("Activity updated successfully");
    } catch (error) {
        console.error("Error updating activity:", error);
    }
};

// Delete an activity
export const deleteActivity = async (activityID) => {
    const activityRef = doc(db, "activities", activityID);
    try {
        await deleteDoc(activityRef);
        console.log("Activity deleted successfully");
    } catch (error) {
        console.error("Error deleting activity:", error);
    }
};

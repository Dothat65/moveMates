import app from "../firebaseConfig";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const getAllRewards = async () => {
    const rewardsList = collection(db, "rewards");
    const rewardsSnapshot = await getDocs(rewardsList);
    const rewards = rewardsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return rewards;
}

export const getReward = async (rewardId) => {
    const rewardRef = doc(db, "rewards", rewardId);
    const rewardDoc = await getDoc(rewardRef);
    if (rewardDoc.exists()){
        return {id: rewardDoc.id, ...rewardDoc.data()};
    }
    else {
        return null;
    }
}

export const addReward = async (rewardId, rewardData) =>{
    const rewardRef = doc(db, "rewards", rewardId);
    try{
        await setDoc(rewardRef, rewardData);
        console.log("Reward added successfully");
    }
    catch (error){
        console.error("Error adding reward:", error);
    }
}

export const updateReward = async (rewardId, updatedData) => {
    const rewardRef = doc(db, "rewards", rewardId);
    try {
        await updateDoc(rewardRef, updatedData);
        console.log("Reward updated successfully");
    } catch (error) {
        console.error("Error updating reward:", error);
    }
}

export const deleteReward = async (rewardId) => {
    const rewardRef = doc(db, "rewards", rewardId);
    try {
        await deleteDoc(rewardRef);
        console.log("Reward deleted successfully");
    } catch (error) {
        console.error("Error deleting reward:", error);
    }
}
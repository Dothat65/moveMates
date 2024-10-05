// rewardsQueries.test.js
import { getAllRewards, getReward, addReward, updateReward, deleteReward } from './rewards'; // Adjust the import path
import { db } from '../firebaseConfig'; // Adjust the import path
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

jest.mock('firebase/firestore', () => {
    return {
        collection: jest.fn(),
        getDocs: jest.fn(),
        doc: jest.fn(),
        getDoc: jest.fn(),
        setDoc: jest.fn(),
        updateDoc: jest.fn(),
        deleteDoc: jest.fn(),
    };
});

describe('Rewards Queries', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    test('getAllRewards should return an array of rewards', async () => {
        const mockRewards = [{ id: '1', name: 'Reward 1' }, { id: '2', name: 'Reward 2' }];
        getDocs.mockResolvedValueOnce({ docs: mockRewards.map(reward => ({ id: reward.id, data: () => reward })) });

        const rewards = await getAllRewards();
        expect(rewards).toHaveLength(2);
        expect(rewards[0]).toHaveProperty('name', 'Reward 1');
    });

    test('getReward should return a specific reward', async () => {
        const mockReward = { id: '1', name: 'Reward 1' };
        doc.mockReturnValueOnce({ id: mockReward.id });
        getDoc.mockResolvedValueOnce({ exists: () => true, data: () => mockReward });

        const reward = await getReward('1');
        expect(reward).toEqual(mockReward);
    });

    test('addReward should call setDoc with the correct arguments', async () => {
        const rewardData = { name: 'New Reward' };
        await addReward('3', rewardData);
        expect(setDoc).toHaveBeenCalledWith(expect.anything(), rewardData);
    });

    test('updateReward should call updateDoc with the correct arguments', async () => {
        const updatedData = { name: 'Updated Reward' };
        await updateReward('1', updatedData);
        expect(updateDoc).toHaveBeenCalledWith(expect.anything(), updatedData);
    });

    test('deleteReward should call deleteDoc with the correct arguments', async () => {
        await deleteReward('1');
        expect(deleteDoc).toHaveBeenCalledWith(expect.anything());
    });
});

import api from './index';

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get('/test');
  return response.data;
};

export const createTask = async (data: Omit<Task, 'id'>) => {
  // Dummy implementation since backend doesn't exist yet
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: Math.random().toString(), ...data }), 500);
  });
};

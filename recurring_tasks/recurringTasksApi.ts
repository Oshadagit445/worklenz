import apiClient from '@/api/api-client';

export const saveRecurringTask = async (
  taskId: string,
  recurrenceConfig: unknown
) => {
  const response = await apiClient.put(
    `/tasks/${taskId}/recurrence`,
    recurrenceConfig
  );

  return response.data;
};
export interface feedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: feedbackCreateData) => Promise<void>;
}
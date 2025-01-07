import { Job } from "bullmq";

export type TJobNames = 'doSomethingGood' | 'doSomethingBad' | 'doSomethingAwesome';
export type TConsumerJob = Job<any, any, string> & { name: TJobNames };
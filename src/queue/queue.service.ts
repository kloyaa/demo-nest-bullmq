import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { JobsOptions, Queue } from 'bullmq';
import { TJobNames } from '../common/enum/types';
import { QueueName } from '../common/enum/enum';

@Injectable()
export class QueueService {
    constructor(@InjectQueue(QueueName.fundTransferQueue) private readonly queueService: Queue) { }

    async doSomethingGood(data: any, opts?: JobsOptions) {
        await this.addJob('doSomethingGood', data, opts);
    }

    async doSomethingBad(data: any, opts?: JobsOptions) {
        this.addJob('doSomethingBad', data, opts)
    }

    async doSomethingAwesome(data: any, opts?: JobsOptions) {
        this.addJob('doSomethingAwesome', data, opts)
    }

    private async addJob<T extends TJobNames>(jobName: T, data: any, opts?: JobsOptions) {
        await this.queueService.add(jobName, { body: data }, {
            ...opts,
            jobId: opts.jobId ?? crypto.randomUUID(),
            attempts: 3,
            removeOnComplete: true
        });
    }
}
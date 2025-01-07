
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { TConsumerJob } from './types';
import { QueueName } from './enum';

@Processor(QueueName.fundTransferQueue)
export class DemoConsumer extends WorkerHost {
    async process(job: TConsumerJob): Promise<any> {
        switch (job.name) {
            case 'doSomethingGood': {
                console.log('doSomethingGood')
                break;
            }
            case 'doSomethingBad': {
                console.log('doSomethingBad')
                break;
            }
            case 'doSomethingAwesome': {
                console.log('doSomethingAwesome')
                break;
            }
        }
    }
}

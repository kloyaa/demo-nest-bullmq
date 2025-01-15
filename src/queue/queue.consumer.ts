import { Processor, WorkerHost } from '@nestjs/bullmq';
import { TConsumerJob } from '../common/enum/types';
import { QueueName } from '../common/enum/enum';

@Processor(QueueName.fundTransferQueue)
export class DemoConsumer extends WorkerHost {
  async process(job: TConsumerJob): Promise<any> {
    switch (job.name) {
      case 'doSomethingGood': {
        console.log('doSomethingGood');
        break;
      }
      case 'doSomethingBad': {
        console.log('doSomethingBad');
        break;
      }
      case 'doSomethingAwesome': {
        console.log('doSomethingAwesome');
        break;
      }
    }
  }
}

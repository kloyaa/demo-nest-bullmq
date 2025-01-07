import { Global, Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bullmq';
import { DemoConsumer } from './queue.consumer';
import { QueueName } from './enum';

@Global()
@Module({
    imports: [
        DemoConsumer,
        BullModule.registerQueue(
            { name: QueueName.fundTransferQueue },
            { name: QueueName.notificationQueue },
        )
    ],
    providers: [QueueService],
    exports: [QueueService]
})
export class QueueModule { }
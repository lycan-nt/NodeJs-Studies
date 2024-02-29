import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RequestMessage, ResponseMessage } from './generated/example.pb';
import { ExampleServiceClient } from './generated/example.pbsc';

@Controller()
export class ExampleController implements ExampleServiceClient {
  @GrpcMethod('ExampleService')
  unaryExample(data: RequestMessage): ResponseMessage {
    return { message: 'Received: ' + data.message };
  }
}

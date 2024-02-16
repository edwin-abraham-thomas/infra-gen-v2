import { Component, OnInit } from '@angular/core';
import { GetFunctionCommand, GetFunctionCommandOutput, LambdaClient } from '@aws-sdk/client-lambda';
import secrets from '../../../../secrets.json'

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss',
})
export class AwsComponent implements OnInit {

  client!: LambdaClient;
  lambdaFunction!: GetFunctionCommandOutput;

  ngOnInit(): void {
    this.client = new LambdaClient({
      region: secrets.aws.region,
      credentials: {
        accessKeyId: secrets.aws.credentials.accessKeyId,
        secretAccessKey: secrets.aws.credentials.secretAccessKey,
      },
    });
  }

  async trigger(): Promise<void> {
    const command = new GetFunctionCommand({
      FunctionName: 'portfolio-api'
    });
    this.lambdaFunction = await this.client.send(command);
  }
}

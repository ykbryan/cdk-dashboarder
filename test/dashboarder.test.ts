import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Dashboarder = require('../lib/index');

test('CloudWatch Dashboard Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  // WHEN
  new Dashboarder.Dashboarder(stack, 'MyTestConstruct');
  // THEN
  expectCDK(stack).to(haveResource('AWS::CloudWatch::Dashboard'));
});

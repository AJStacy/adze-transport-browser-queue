import { adze, createShed } from 'adze';
import { transportQueue } from './src';

const shed = createShed();

shed.addListener('*', transportQueue());

adze().log('Log numer 1');
adze().info('Log number 2');
adze().alert('Log number 3');

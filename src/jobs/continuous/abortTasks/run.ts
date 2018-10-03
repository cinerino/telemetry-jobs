/**
 * タスク中止
 */

import * as cinerino from '@cinerino/telemetry-domain';
import * as createDebug from 'debug';

import mongooseConnectionOptions from '../../../mongooseConnectionOptions';

const debug = createDebug('cinerino-telemetry-jobs');

cinerino.mongoose.connect(<string>process.env.MONGOLAB_URI, mongooseConnectionOptions).then(debug).catch(console.error);

let count = 0;

const MAX_NUBMER_OF_PARALLEL_TASKS = 10;
const INTERVAL_MILLISECONDS = 500;
const RETRY_INTERVAL_MINUTES = 10;
const taskRepo = new cinerino.repository.Task(cinerino.mongoose.connection);

setInterval(
    async () => {
        if (count > MAX_NUBMER_OF_PARALLEL_TASKS) {
            return;
        }

        count += 1;

        try {
            await cinerino.service.task.abort(RETRY_INTERVAL_MINUTES)({ task: taskRepo });
        } catch (error) {
            console.error(error);
        }

        count -= 1;
    },
    INTERVAL_MILLISECONDS
);

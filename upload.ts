import { createActor } from './src/declarations/certified_assets/index';
import fetch from 'node-fetch';

upload();

async function upload() {
    const actor = createActor(
        '',
        {
            agentOptions: {
                fetch,
                host: 'http://localhost:8000'
            }
        }
    );

    // const result = await certified_assets.create_batch({});

    // console.log('result', result);
}
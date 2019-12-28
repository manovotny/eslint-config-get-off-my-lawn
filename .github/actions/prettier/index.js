const core = require('@actions/core');
const github = require('@actions/github');

try {
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log('PAYLOAD', payload);
} catch (error) {
    core.setFailed(error.message);
}

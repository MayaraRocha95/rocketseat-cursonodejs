import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;
        console.log(transformed);
        callback(null, Buffer.from(String(transformed)));
    }
}

const server = http.createServer(async (req, res) => {
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    const transformedStream = new InverseNumberStream();

    // Pipe the request through the transformation stream
    for (const buffer of buffers) {
        transformedStream.write(buffer);
    }

    // Handle the end of the transformation stream
    transformedStream.end();

    // Pipe the transformed data to the response
    transformedStream.pipe(res);
});

server.listen(3335);

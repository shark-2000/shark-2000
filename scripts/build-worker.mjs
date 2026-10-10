import {readFile,writeFile} from 'node:fs/promises';
const handler=await readFile('worker/handler.js','utf8'),page=await readFile('public/index.html','utf8'),kit=await readFile('public/freelance-profile-kit.txt','utf8');
await writeFile('worker/index.js',handler+'\nconst page='+JSON.stringify(page)+';\nconst kit='+JSON.stringify(kit)+';\nexport default {fetch(request,env){return handle(request,env,page,kit)}};\n');

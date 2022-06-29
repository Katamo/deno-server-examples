const server = Deno.listen({ port: 8000 });
console.log(`TCP server up and running on port 8000`);

for await (const connexion of server) {

  let buf=new Uint8Array(50);
  const n=await connexion.read(buf) || 0;
  buf=buf.slice(0, n);

  console.log('>>>', new TextDecoder().decode(buf));
}
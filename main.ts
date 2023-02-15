import Client, { connect } from "npm:@dagger.io/dagger@0.3.1"

// initialize Dagger client
connect(async (client: Client) => {
  // get Node image
  // get Node version
  const node = client.container().from("node:16").withExec(["node", "-v"])

  // execute
  const version = await node.stdout()

  // print output
  console.log("Hello from Dagger and Node " + version)
})
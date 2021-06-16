import { Client } from '../src'

const client = new Client()

// connect to the server
client.connect('http://localhost:5000').then(async () => {
  console.log('Connected to server')

  client.createUser({
    travellerName: 'John Doe',
    travellerEmail: 'john.doe@example.com',
    // can someone teach john basic security practices?
    travellerPassword: 'password123'
  }).then(() => {
    console.log(`Successfully created user '${client.user?.name}'`)
  }).catch(err => {
    console.log(err)
  })
})

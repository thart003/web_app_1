import { db } from '../src/lib/prisma'

async function testMediaSchema() {
  try {
    console.log('🚀 Starting media schema test...')

    // Create a test user
    const user = await db.user.create({
      data: {
        email: 'mediatest@example.com',
        name: 'Media Test User',
        hashedPassword: 'dummy-hashed-password',
      }
    })
    console.log('✅ Created user')

    // Rest of your code, replacing prisma with db
    const headerImage = await db.media.create({
      // ... rest of the code
    })
    
    // ... rest of your code, just replace all prisma. with db.

  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    // Clean up test data
    try {
      await db.document.deleteMany()
      await db.media.deleteMany()
      await db.user.deleteMany()
      console.log('🧹 Cleaned up test data')
    } catch (cleanupError) {
      console.error('❌ Cleanup failed:', cleanupError)
    }
    await db.$disconnect()
  }
}

// Run the tests
console.log('🏃 Running media schema tests...')
testMediaSchema()
  .catch(console.error)
  .finally(() => console.log('✨ Tests completed'))
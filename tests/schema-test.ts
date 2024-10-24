import { db } from '../src/lib/prisma'

async function testSchema() {
  try {
    console.log('🚀 Starting schema test...')

    // Test 1: Create a user
    const user = await db.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        hashedPassword: 'dummy-hashed-password',
      }
    })
    console.log('✅ Created user:', user)

    // Rest of your code, replacing prisma with db
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    // Clean up test data
    try {
      await db.document.deleteMany()
      await db.website.deleteMany()
      await db.user.deleteMany()
      console.log('🧹 Cleaned up test data')
    } catch (cleanupError) {
      console.error('❌ Cleanup failed:', cleanupError)
    }
    await db.$disconnect()
  }
}

// Run the tests
console.log('🏃 Running schema tests...')
testSchema()
  .catch(console.error)
  .finally(() => console.log('✨ Tests completed'))
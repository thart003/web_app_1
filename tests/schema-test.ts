// tests/schema-test.ts
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
        subscriptionStatus: 'trial',
        subscriptionEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      }
    })
    console.log('✅ Created user')

    // Test 2: Create a website for the user
    const website = await db.website.create({
      data: {
        subdomain: 'test-site',
        title: 'Test Website',
        description: 'A test website',
        userId: user.id,
      }
    })
    console.log('✅ Created website')

    // Test 3: Create a document
    const document = await db.document.create({
      data: {
        title: 'Test Document',
        content: 'This is a test document',
        slug: 'test-doc',
        userId: user.id,
        tags: ['test', 'demo'],
        category: 'test',
      }
    })
    console.log('✅ Created document')

    // Test 4: Verify relationships
    const userWithRelations = await db.user.findUnique({
      where: { id: user.id },
      include: {
        website: true,
        documents: true,
      }
    })

    if (!userWithRelations) {
      throw new Error('Failed to fetch user with relations')
    }

    if (!userWithRelations.website) {
      throw new Error('Website relation not established')
    }

    if (userWithRelations.documents.length === 0) {
      throw new Error('Document relation not established')
    }

    console.log('✅ Verified relationships')
    console.log('✅ All schema tests passed successfully')

  } catch (error) {
    console.error('❌ Test failed:', error)
    throw error // Re-throw to ensure the process exits with an error code
  } finally {
    // Clean up test data in reverse order of creation
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
  .catch((error) => {
    console.error('❌ Tests failed:', error)
    process.exit(1)
  })
  .finally(() => console.log('✨ Tests completed'))
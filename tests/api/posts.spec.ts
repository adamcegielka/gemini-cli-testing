import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder - Posts API', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 should return correct post data', async ({ request }) => {
    // Perform GET request
    const response = await request.get(`${baseURL}/posts/1`);

    // Verify response status
    expect(response.status()).toBe(200);

    // Parse response body
    const body = await response.json();

    // Verify response content
    expect(body.id).toBe(1);
    expect(body.title).toBeDefined();
    expect(body.body).toBeDefined();
    expect(typeof body.userId).toBe('number');
  });

  test('POST /posts should create a new post', async ({ request }) => {
    // Data to be sent in the POST request
    const newPost = {
      title: 'Testing with Playwright',
      body: 'This post was created during a testing session.',
      userId: 1,
    };

    // Perform POST request
    const response = await request.post(`${baseURL}/posts`, {
      data: newPost,
    });

    // Verify response status (201 Created)
    expect(response.status()).toBe(201);

    // Parse response body
    const body = await response.json();

    // Verify that the response body contains the data we sent and an ID
    expect(body.title).toBe(newPost.title);
    expect(body.body).toBe(newPost.body);
    expect(body.userId).toBe(newPost.userId);
    expect(body.id).toBeDefined();
  });
});

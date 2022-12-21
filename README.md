# React: Classified Application

## Demo

Gif coming Soon

## Instructions

Welcome to Classified App, a community site for finding a listing for almost anything —jobs, apartments, garage sales, used cars, personal ads, and much more near you. You will be building a search feature by clicking, viewing all the listings, and favorite listing items, and deleting items that persist.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `3000`.
3. In a new terminal, run `npm start`.

Make sure to open [http://localhost:3000/listings](http://localhost:3000/listings)
in the browser to verify that your backend is working before you proceed!

## Core Deliverables

As a user:

1. When the app starts, I can see all listings.
2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the
   star icon. This feature doesn't need backend persistence.
3. I can remove a listing from the page by clicking the trash can icon. This
   change should be persisted in the backend.
4. I can search for listings by their description.

### Endpoints for Core Deliverables

The base URL for your backend is: `http://localhost:3000`.

#### GET /listings

Example Response:

```json
[
  {
    "id": 1,
    "description": "toaster",
    "image": "./images/toaster.jpg",
    "location": "Brooklyn"
  },
  {
    "id": 2,
    "description": "BBQ grill",
    "image": "./images/bbq-grill.jpg",
    "location": "Williamsburg"
  }
]
```

#### DELETE `/listings/:id`

Example Response:

```json
{}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

You'll have to add additional elements for these features. Feel free to style
them however you see fit!

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user:

1. I can sort the listings alphabetically by location.
2. I can create a new listing by submitting a form, and persist the changes to the backend.

### Endpoints for Advanced Deliverables

#### POST /listings

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "id": 1,
  "description": "toaster",
  "image": "./images/toaster.jpg",
  "location": "Brooklyn"
}
```

Example response:

```json
{
  "id": 1,
  "description": "toaster",
  "image": "./images/toaster.jpg",
  "location": "Brooklyn"
}
```

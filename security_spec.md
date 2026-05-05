# Security Specification - ReviewGuard

## Data Invariants
1. A business must belong to an authenticated owner.
2. A review must be linked to a valid business ID.
3. Users can only access data (businesses, reviews, insights) that they own or manage.

## Identity & Access
- **Auth required** for all writes.
- **Verification**: `request.auth.token.email_verified == true`.
- **Ownership**: `resource.data.ownerId == request.auth.uid` or derived from parent business.

## The Dirty Dozen Payloads
- P1: Attempt to create a business with someone else's UID as `ownerId`.
- P2: Attempt to read reviews of a business not owned by the user.
- P3: Attempt to update a business name to an empty string or 1MB string.
- P4: Attempt to delete a business owned by another user.
- P5: Attempt to inject a system field like `isAdmin` into a business profile.
- P6: Attempt to create a review with a rating > 5.
- P7: Attempt to batch-list reviews without a proper business ID filter.
- P8: Attempt to update `createdAt` field on an existing business.
- P9: Attempt to create an insight document manually (system should generate, but rules must guard).
- P10: Attempt to bypass `isValidId` by using special characters in IDs.
- P11: Attempt to read someone else's PII (though none stored currently, we keep rules tight).
- P12: Attempt to spoof `email_verified` status (Firebase Auth handles this, but rules must check token).

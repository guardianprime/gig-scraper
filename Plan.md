# PROJECT ARCHITECTURE AND FUTURE INTEGRATIONS

## Each module/ owns:

- Model

- Service logic

- Controller

- Routes

- Validation

So when i decide to turn to SaaS:

- i can add billing/

- Add auth/

- Add teams/

- Add analytics/

### leads/

This is my central asset.

Handles:

- Business name

- Registration number

- Status (active/inactive)

- Website presence

- Owner contact

- Outreach status

- This becomes my core SaaS entity.

Lead Model should look like:

- businessName

- registrationNumber

- status (ACTIVE | INACTIVE)

- hasWebsite (boolean)

- websiteUrl

- contactEmail

- outreachStatus (PENDING | SENT | RESPONDED)

- lastContactedAt

### scraping

- This is separate from leads.

- Very important.

- Scraping logic should NOT live inside leads.service.

- Scraping is a domain on its own:

- CAC status lookup

- Website detection

- Future: LinkedIn scraping

- Future: Google Maps enrichment

i want this swappable.

### outreach

Handles:

- Message queue

- WhatsApp/email payload generation

- Status tracking

- Follow-up logic

- Later:

- Connect to email provider

- Add Twilio

- Add automation

## Test:

- Business logic (unit)

- Routes (integration)

- Classification engine (critical)

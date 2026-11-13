# Thyme Machine release gates

The build can continue without routine owner review. These are the only intentional pauses:

## Private friend test

* Real authentication and account deletion are implemented
* Reporting, blocking, age gate, and moderation controls are tested
* Social sign in and photo import use explicit consent
* Subscription remains test mode until store products are configured
* TestFlight and Google Play internal testing are used before public release

## Owner only gates

The owner must be present in the browser for:

* Apple Developer and Google Play identity or account terms
* Paid subscription product setup and banking or tax information
* Privacy, dating safety, refund, and age rating declarations
* Final App Store or Google Play submission

No production credentials, real user photos, or payment data belong in the prototype repository.

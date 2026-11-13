# Open source foundation review

Reviewed November 12, 2026.

## Candidates

* [Humbble](https://github.com/Prakashchandra-007/humbble), React Native and Expo, MIT. Useful reference for cross platform structure, profiles, matching, and chat. The repository is small and still expects a backend choice, so it is not a drop in production base.
* [Tinder Clone React Native Expo](https://github.com/jdiezperez/tinder-clone-react-native-expo), React Native and Expo, ISC as stated in its README. It advertises auth, swiping, matching, chat, PostgreSQL, and Socket.io, but has a very small commit history and is too close to a clone for the Thyme Machine product direction.
* [OpenDating Mobile](https://github.com/jongan69/opendating-mobile), Expo, MIT. Strong reference for daily quotas, explainable introductions, coarse location, blocking, reporting, and privacy receipts. Its protocol and service assumptions are more complex than the first Thyme Machine release.
* [Complete Dating App](https://github.com/helloharendra/Complete-Dating-App), Flutter and FastAPI, MIT. Broad feature list, but the repository makes commercial add ons and production claims that need independent verification.

## Decision

Keep the Thyme Machine prototype and build a fresh cross platform app around the simpler signature loop. Reuse only clearly licensed patterns and independently implement the brand, copy, matching signals, rewards, and subscription experience.

## Product choice

The first release should show a small number of explainable matches immediately. The free manouche reward and Lebanon olive oil reward belong in a server controlled promotion system, with eligibility, inventory, expiration, fraud prevention, and redemption rules. They must never be promised to every user until the business can actually honor them.

# Next steps — push to GitHub and invite your team

Everything I did from this session is already committed locally on `main`. The
repo hasn't talked to GitHub yet — the last three steps (revoke the old token,
push, invite collaborators) need to be run from your own terminal because they
need credentials you keep on your Mac.

## 1. Revoke the exposed token (do this first)

The remote URL used to have a GitHub personal access token (`ghp_yYSX...ow1ZIe2H`)
embedded in it. I've removed it from both `.git/config` files, but the token is
still valid until you revoke it.

1. Open https://github.com/settings/tokens in your browser.
2. Find the token starting with `ghp_yYSX...` and click **Delete**.
3. Generate a new fine-grained PAT only if you plan to use HTTPS instead of SSH.

## 2. Confirm your SSH key is set up on GitHub

You chose SSH for auth. Verify from your terminal:

```bash
ssh -T git@github.com
```

If you see `Hi NYGCEDRIC! You've successfully authenticated...`, you're set.

If it says `Permission denied (publickey)`:

```bash
# Generate a key if you don't already have one
ssh-keygen -t ed25519 -C "nyagatarecedric@gmail.com"

# Start ssh-agent and add the key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy the public key to your clipboard
pbcopy < ~/.ssh/id_ed25519.pub
```

Then paste it at https://github.com/settings/ssh/new (title it e.g. "Cedric Mac"),
and re-run `ssh -T git@github.com` to confirm.

## 3. Push to GitHub

From your terminal, in the `Tapay Website` folder:

```bash
cd "/path/to/Tapay Website"   # wherever you keep it

# Sanity check — remote should be SSH, not HTTPS
git remote -v
# expected: origin  git@github.com:NYGCEDRIC/tapayrw-website.git (fetch/push)

# Your local main has 3 new commits on top of rewritten history.
# Force-with-lease is the safer force push; it refuses to push if someone else
# has updated origin/main since your last fetch.
git push --force-with-lease origin main
```

If it complains about a stale `origin/main` tracking ref, run `git fetch origin`
first, then try the push again.

## 4. Invite `mucyopatrick4321-gif` as a collaborator

1. Open https://github.com/NYGCEDRIC/tapayrw-website/settings/access
2. Click **Add people**.
3. Type `mucyopatrick4321-gif` and select them.
4. Choose a role:
   - **Write** — can push to branches and open PRs. Good default for teammates.
   - **Maintain** — Write + can manage issues/PRs and some settings.
   - **Admin** — full control incl. deleting the repo. Only for co-owners.
5. Click **Add** — they'll get an email invite.

They'll accept, then can clone:

```bash
git clone git@github.com:NYGCEDRIC/tapayrw-website.git
```

## 5. Set up a simple team workflow (recommended)

Since you chose "direct collaborators," your team can push to `main` directly.
To avoid stepping on each other, a minimal convention works well:

- Each person works on a feature branch: `git checkout -b yourname/feature-foo`
- Push the branch: `git push -u origin yourname/feature-foo`
- Open a PR on GitHub, get a quick look from a teammate, merge to `main`
- Pull `main` often: `git pull --rebase origin main`

If you'd like, I can add a `CONTRIBUTING.md` with those conventions and turn on
branch protection for `main` (requires admin role on the repo — done via GitHub
UI → Settings → Branches).

## 6. About the `react-hook-form` downgrade

In the config commit I kept your existing change that pins
`react-hook-form` to `^7.43.0` (down from `^7.51.3`). If that downgrade wasn't
intentional, bump it back up before pushing:

```bash
# inside Tapay Website folder
npm install react-hook-form@^7.51.3
git add package.json package-lock.json
git commit -m "chore: bump react-hook-form back to ^7.51.3"
```

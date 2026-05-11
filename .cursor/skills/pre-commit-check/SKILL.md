---
name: Pre-Commit Check Skill
description: Ensure code quality and project consistency before committing changes
---

# Pre-Commit Check Skill

Before I commit, perform the following steps in order.

## Step 1 — Read Changed Files First

Read all modified files that have not been committed yet (git diff).
Understand:

- Which files changed
- What logic changed
- Which functions or components are affected
- What is the purpose of these changes

## Step 2 — Fetch Only Relevant Issues

Using GitHub MCP, fetch open issues from this repository that match at least one of these criteria:

- Related to the same files or components I changed
- Related to the same logic or functionality I modified
- General/global issues that affect the whole project (e.g. code style, architecture, security)

## Step 3 — Fetch Only Relevant PR Comments

Using GitHub MCP, fetch unresolved comments from open pull requests that match at least one of these criteria:

- Written on files I have changed
- Related to the same logic or functionality I modified

## Step 4 — Analyze and Compare

Compare the changed code against the relevant issues and PR comments. Categorize each as:

FIXED — my changes directly fix this issue or fully address this PR comment
RISK — my change touches the same area, may break or conflict

## Step 5 — Report

Present the results in this format:

PRE-COMMIT CHECK REPORT

FIXED
Issue #42 — "Login button broken on mobile"
→ login_button.js patched

PR #15 comment — "Refactor this function"
→ function rewritten in auth.js

RISK
Issue #43 — "Dark mode not saving on iPhone"
→ you modified theme.js — verify nothing broke

PR #12 comment — "Don't change this logic"
→ you touched the same block in utils.js — double check

SUGGESTED COMMIT MESSAGE
"Fix #42 — login button patched on mobile"

## Step 6 — Ask for Confirmation

Ask me:
"Do you confirm this commit with the suggested message,
or would you like to make changes first?"

If confirmed → commit.
If not → wait for my instruction.

# assign support cases to agents

## consider provided `data.json` & write a NodeJS|Python|Psudo Code program to assign a support case to elligible Agent.

- cases are stored in the priority order
- higher priority case should get an agent over low priority case (if sufficient agents are not available)
- An agent can get only one case
- If all elligible Agents for a given case are already taken by higher priority case(s), backtrace & see if those higher cases can be assigned to some other next favourable agent (lesser skill ratting) (in their `elligibleAgentsSortedBySkillRatting`)

- above condition will allow maximum cases assigned in optimized way while respecting the agent skill rattings as well (not strictly).

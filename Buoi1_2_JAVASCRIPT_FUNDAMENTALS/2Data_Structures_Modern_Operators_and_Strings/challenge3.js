// Sample game events data
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [22, '🔴 RED CARD'],
    [36, '⚽ GOAL'],
    [47, '⚽ GOAL'],
    [64, '🟡 YELLOW CARD'],
    [69, '⚽ GOAL'],
    [76, '🟡 YELLOW CARD'],
    [80, '⚽ GOAL'],
    [90, '🔴 RED CARD']
]);

// 1. Create an array of different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Game Events:', events);

// 2. Remove the yellow card from minute 64
gameEvents.delete(64);

// 3. Compute the average time between events
const totalEvents = gameEvents.size; // Total number of events
const averageTime = 90 / totalEvents; // Average time per event
console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);

// 4. Loop over gameEvents and log each element with half indication
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF'; // Determine half of the game
    console.log(`[${half}] ${minute}: ${event}`);
}

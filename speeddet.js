function calculateDemeritPoints(speed) {
    const speedLimit = 70; // The maximum allowed speed (70 km/h).
    const pointsPerExcessKm = 5; //The number of demerit points per excess kilometer above the speed limit (5 km/h).
    const maxDemeritPoints = 12;//The maximum allowable demerit points before the license is suspended (12 points).

    if (speed < speedLimit) {
        return "Ok"; //if speed is below 70 return okey
    } else {
        const excessSpeed = speed - speedLimit;//calculates the excess speed
        let demeritPoints = Math.floor(excessSpeed / pointsPerExcessKm)//divides the excess speed by the number of points per excess speed

        if (demeritPoints > maxDemeritPoints) {
            return "License suspended";//if the points exceed the max allowed license is suspended
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
const Speed=prompt("Enter the car's speed (in km/h):");
const speed = calculateDemeritPoints(Speed);
console.log(speed);

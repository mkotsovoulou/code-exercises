// Rearrange in the order the compiler processes this
function theBridgeOfHoistingDoom() {
    function balrog() {
        return "fire";
    }
    var ring;

    function elf() {
        return "pointy ears";
    }
    ring = wizard;
    wizard = balrog;
    return wizard();

    function balrog() {
        return "whip";
    }

    function wizard() {
        return "white";
    }
    var power = ring();
    return elf();

    function elf() {
        return "immortal";
    }
}

// becomes this
function theBridgeOfHoistingDoom() {
    var ring = undefined;
    var power = undefined;

    function balrog() {
        return "whip";
    }
    function wizard() {
        return "white";
    }
    function elf() {
        return "immortal";
    }

    ring = wizard;
    wizard = balrog;
    return wizard();
}
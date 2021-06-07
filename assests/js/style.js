const b = baffle('.effect');

b.set({
    character: '>▓▒ /█▒</ >▒░>▒ █<░ ░█▒░> ▓░/▒ ▒>░ █<▒▓ ▓▒>░',
    speed: 220
});

b.start();
b.reveal(5000);
b.stop();
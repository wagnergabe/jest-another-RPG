const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock('../lib/Potion');

test('creates an enmy object', () => {
    const enemy = new Enemy('oni', 'katana');

    expect(enemy.name).toBe('oni');
    expect(enemy.weapon).toBe('katana');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () => {
    const enemy = new Enemy('oni', 'katana');
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  });
  
  test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('oni', 'katana');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0;
  
    expect(enemy.isAlive()).toBeFalsy();
  });
  
  test("gets enemy's attack value", () => {
    const enemy = new Enemy('oni', 'katana');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });
  
  test("subtracts from enemy's health", () => {
    const enemy = new Enemy('oni', 'katana');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });

  test('gets a descrition of the enemy', () => {
    const enemy = new Enemy('oni', 'katana');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('oni'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('katana'));
  });
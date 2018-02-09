function RaidPlayer(playerController)
{
  this.pc = playerController;
}

RaidPlayer.prototype = 
{
  act: function() 
  {
    var units = this.pc.senseNearbyUnits();
    console.log('Cannot magic attack anything!');
    
    if(units.isEmpty && this.pc.canHeal())
    {
      if (this.pc.getHp() < 20)
      {
        this.pc.heal();
        return;
      }
    }
    for (var i = 0; i < units.length; i++)
    {
      if(units[i].active)
      {
        console.log('unit is active');
      }
      //magic attack
      else if (this.pc.canMagicAttack(units[i].location))
      {
        console.log('magic attacking unit at location ', units[i].location.toString());
        this.pc.magicAttack(units[i].location);
        return;
      }
      //melee attack
      else if (this.pc.canMeleeAttack(units[i].location))
      {
        console.log('melee attacking unit at location ', units[i].location.toString());
        this.pc.meleeAttack(units[i].location);
        return;
      }
      //ranged attack
      else if (this.pc.canRangedAttack(units[i].location))
      {
        console.log('ranged attacking unit at location ', units[i].location.toString());
        this.pc.rangedAttack(units[i].location);
        return;
      }
    }
    console.log('Cannot ranged attack anything!');
    
    //direction
    var direction = this.pc.senseDirectionToExit();
    var idx = 0;
    while (!this.pc.canMove(direction) && idx < 10)
    {
        console.log('rotating left!')
        direction = direction.rotateLeft();
        idx++;
        if(idx >= 2)
        {
          console.log('rotating right!')
          direction = direction.rotateRight();
          direction = direction.rotateRight(); //necessary
        }
    }
    if (this.pc.canMove(direction))
    {
        console.log('Moving', direction.toString());
        this.pc.move(direction);
        return;
    }
    console.log('cannot move!');
  }
  
}
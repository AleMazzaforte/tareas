

export const tarea4 = () => {

    interface Membership {
        type: string;
        price: number;
        getBenefits(): string[];
    }

     interface PremiumMembership extends Membership {
        type: 'premium';
        price: 49.99;
        getBenefits(): string[];    
    }

    interface StandardMembership extends Membership {
        type: 'standard';
        price: 10;
        getBenefits(): string[];    
    }

    interface FreeMembership extends Membership {
        type: 'basic';
        price: 0;
        getBenefits(): string[];    
    }
   
    class PremiumMembership1 {
        constructor( private props: PremiumMembership) {
        }       
    }

    class StandardMembership1 {
        constructor( private props: StandardMembership) {
        }       
    }

    class FreeMembership1 {
        constructor( private props: FreeMembership) {
        }
    }

    const membership1: PremiumMembership1 = new PremiumMembership1(
        {
            type: 'premium', 
            price: 49.99, 
            getBenefits: () => [
                'Unlimited access to all content', 
                'Access whithout ads'
            ]
        }
    );

    const membership2: StandardMembership1 = new StandardMembership1(
        {
            type: 'standard', 
            price: 10, 
            getBenefits: () => [
                'Access to more content', 
                'Acces with ads'
            ]
        }
    );
    
    const membership3: FreeMembership1 = new FreeMembership1(
        {
            type: 'basic', 
            price: 0, 
            getBenefits: () => [
                'Access to basic content', 
                'Access with ads'
            ]
        }
    );


    console.log(membership1, membership2, membership3);


  return (
    <div>tarea4</div>
  )
}

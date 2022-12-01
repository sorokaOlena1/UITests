export function findProduct(productName) {
    cy.get('body').then(body => {
        if (body.find(`div.item-name:contains(" ${productName} ")`).length > 0) {
            cy.get(`div.item-name:contains(" ${productName} ")`).parents('div .mat-grid-tile-content').within(() => {
                cy.log(`Product is found - ${productName}`);
                cy.get('button[aria-label="Add to Basket"]').click()})

            } else {
                if (body.find('[aria-label="Next page"][disabled="true"]').length > 0) {
                    return cy.log('Product not found');
                        } else {
                        cy.get('[aria-label="Next page"]').click()
                        }
                        findProduct(productName)
                    }
            }
        )
    }

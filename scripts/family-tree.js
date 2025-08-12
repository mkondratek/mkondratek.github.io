// Family tree data for Józef Jan
const familyTreeData = {
    // Great-grandparents level
    greatGrandparents: [
        { name: 'Pradziadek\nStanisław', side: 'paternal' },
        { name: 'Prababcia\nMaria', side: 'paternal' },
        { name: 'Pradziadek\nJan', side: 'maternal' },
        { name: 'Prababcia\nAnna', side: 'maternal' }
    ],
    // Grandparents level  
    grandparents: [
        { name: 'Dziadek\nMikołaj', side: 'paternal' },
        { name: 'Babcia\nKatarzyna', side: 'paternal' },
        { name: 'Dziadek\nJan', side: 'maternal' },
        { name: 'Babcia\nMaria', side: 'maternal' }
    ],
    // Parents level
    parents: [
        { name: 'Tata\nMikołaj', role: 'father' },
        { name: 'Mama\n[Imię]', role: 'mother' }
    ],
    // Child
    child: {
        name: 'Józef Jan\nKondratek',
        birth: '13.XII.2024',
        baptism: '15.VIII.2025'
    }
};

// Function to generate family tree HTML
function generateFamilyTree() {
    const treeContainer = document.getElementById('family-tree');
    if (!treeContainer) return;

    const treeHTML = `
        <h2>Drzewo rodziny Józefa Jana</h2>
        <div class="tree">
            <!-- Great-grandparents level -->
            <div class="tree-level great-grandparents">
                ${familyTreeData.greatGrandparents.map(person => `
                    <div class="tree-person ${person.side}">
                        <div class="person-card">
                            <div class="person-name">${person.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Connection lines for great-grandparents -->
            <div class="tree-connections great-connections">
                <div class="connection-line paternal"></div>
                <div class="connection-line maternal"></div>
            </div>
            
            <!-- Grandparents level -->
            <div class="tree-level grandparents">
                ${familyTreeData.grandparents.map(person => `
                    <div class="tree-person ${person.side}">
                        <div class="person-card">
                            <div class="person-name">${person.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Connection lines for grandparents -->
            <div class="tree-connections parent-connections">
                <div class="connection-line parents"></div>
            </div>
            
            <!-- Parents level -->
            <div class="tree-level parents">
                ${familyTreeData.parents.map(person => `
                    <div class="tree-person ${person.role}">
                        <div class="person-card parent-card">
                            <div class="person-name">${person.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Connection line to child -->
            <div class="tree-connections child-connection">
                <div class="connection-line child"></div>
            </div>
            
            <!-- Child level -->
            <div class="tree-level child">
                <div class="tree-person main-child">
                    <div class="person-card child-card">
                        <div class="person-name main-name">${familyTreeData.child.name}</div>
                        <div class="person-details">
                            <div class="birth-date">ur. ${familyTreeData.child.birth}</div>
                            <div class="baptism-date">chrz. ${familyTreeData.child.baptism}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    treeContainer.innerHTML = treeHTML;
}

// Initialize family tree when page loads
document.addEventListener('DOMContentLoaded', generateFamilyTree);

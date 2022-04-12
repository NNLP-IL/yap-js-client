/**
 * Joint analysis result interface
 */
export interface JointResult {
    /**
     * Morphological analysis in lattice format
     */
    maLattice: string;
    /**
     * Disambiguation analysis in lattice format
     */
    mdLattice: string;
    /**
     * Dependencies tree in CoNLL format
     */
    depTree: string;   
}
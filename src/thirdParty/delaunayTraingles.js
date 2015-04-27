// Calculates the spherical Delaunay triangulation of a set of points
// These points are entered as an array of arrays of coordinates: 0, 1, 2
// Any extra members are ignored

// FindDelaunayTriangulation(Positions) and
// FindDelaunayTriangulationIndexed(Positions, Indices)
// work from an array of points as specified above,
// the second one working from a set of indices into the array,
// and return an object with these members:

// positions -- vectors on a unit sphere
// indices -- of all the vertices
// triangles -- array of TriangleObject
// edges -- array of EdgeObject
// hull -- array of vertex indices -- the convex hull
// vor_positions -- positions of triangles' circumcircle centers (Voronoi vertices)
// vor_edges -- pair of indices in vor_positions (empty one: [-1,-1])
// vor_polygons -- object indexed by vertex index,
//    and containing edges (EdgeObject), triangles (TriangleObject),
//    and boundary (vertices in vor_positions)
//    Open ones have a -1 at each end.

// Warning: ImproveTriangulation() is mysteriously buggy
// and is effectively disabled for now

function dotprd(x,y)
{
	var sum = 0.0;
	for (var ic=0; ic<3; ic++)
		sum += x[ic]*y[ic];
	return sum;
}

function crsprd(x,y)
{
	var prod = new Array(3);
	for (var ic=0; ic<3; ic++)
	{
		var ic1 = ic + 1;
		if (ic1 >= 3) ic1 -= 3;
		var ic2 = ic + 2;
		if (ic2 >= 3) ic2 -= 3;
		prod[ic] = x[ic1]*y[ic2] - x[ic2]*y[ic1];
	}
	return prod;
}

function triple_prd(x,y,z)
{
	return dotprd(crsprd(x,y),z);
}

// This distance formula has some nice properties:
// distance and not square of distance;
// the square roots give better numerical resolution
// distance of antipode(p) to p' = - (distance of p to p')
// Range: -2 to +2
function ptdist(x,y)
{
	var dst1 = 0.0;
	var dst2 = 0.0;
	for (var ic=0; ic<3; ic++)
	{
		var diff1 = y[ic] - x[ic];
		dst1 += diff1*diff1;
		var diff2 = y[ic] + x[ic];
		dst2 += diff2*diff2;
	}
	return Math.sqrt(dst1) - Math.sqrt(dst2);
}

function Normalize(vec)
{
	var vecres = new Array(3);
	var sum = 0.0;
	for (var ic=0; ic<3; ic++)
	{
		var val = vec[ic];
		sum += val*val;
	}
	if (sum > 0)
		nrmult = 1/Math.sqrt(sum);
	else
		nrmult = 0;
	for (ic=0; ic<3; ic++)
	{
		vecres[ic] = nrmult*vec[ic];
	}
	return vecres;
}

// Indexed versions

function dotprd_ix(Positions,ix,iy)
{
	return dotprd(Positions[ix],Positions[iy]);
}

function crsprd_ix(Positions,ix,iy)
{
	return crsprd(Positions[ix],Positions[iy]);
}

function triple_prd_ix(Positions,ix,iy,iz)
{
	return triple_prd(Positions[ix],Positions[iy],Positions[iz]);
}

function ptdist_ix(Positions,ix,iy)
{
	return ptdist(Positions[ix],Positions[iy]);
}

// Returns a zero 3-vector
function zerovec()
{
	var vec = new Array(3);
	for (var ic=0; ic<3; ic++)
		vec[ic] = 0.0;
	return vec;
}

// Implements copying
function vec_copy(x)
{
	var vec = new Array(3);
	for (var ic=0; ic<3; ic++)
		vec[ic] = x[ic];
	return vec;
}

// Implements x += y
function vec_add_to(x,y)
{
	for (var ic=0; ic<3; ic++)
		x[ic] += y[ic];
}

// Implements x *= y
function vec_mult_scalar_to(x,y)
{
	for (var ic=0; ic<3; ic++)
		x[ic] *= y;
}

// Implements x - y
function vec_difference(x,y)
{
	var diff = zerovec();
	for (var ic=0; ic<3; ic++)
		diff[ic] = x[ic] - y[ic];
	return diff;
}

// JavaScript's counterpart of "null" / "None":
function IsNull(x)
{
	return (typeof(x) == 'undefined');
}

function TrianglesEqual(tr1, tr2)
{
	if (IsNull(tr1)) return false;
	if (IsNull(tr2)) return false;

	for (var iv=0; iv<3; iv++)
		if (tr1.verts[iv] != tr2.verts[iv])
			return false;

	return true;
}

function EdgesEqual(ed1, ed2)
{
	if (IsNull(ed1)) return false;
	if (IsNull(ed2)) return false;

	for (var iv=0; iv<2; iv++)
		if (ed1.verts[iv] != ed2.verts[iv])
			return false;

	return true;
}

function min(x,y)
{
	return (y < x) ? y : x;
}

function max(x,y)
{
	return (y > x) ? y : x;
}

function TriangleObject(Positions, verts)
{
	this.verts = verts;
	this.edges = new Array(3);

	// Find directions for testing whether a point is inside
	this.dirs = new Array(3);
	for (var ic=0; ic<3; ic++)
	{
		var ic1 = ic + 1;
		if (ic1 >= 3) ic1 -= 3;
		var ic2 = ic + 2;
		if (ic2 >= 3) ic2 -= 3;
		this.dirs[ic] = crsprd_ix(Positions,verts[ic1],verts[ic2]);
	}

	// Tetrahedral volume factor
	this.vol = triple_prd_ix(Positions,verts[0],verts[1],verts[2]);

	// Adjust to get the signs correct for the point-inside test;
	// the vertex opposite the edges' vertices ought to give a dot product of 1
	for (ic=0; ic<3; ic++)
		vec_mult_scalar_to(this.dirs[ic],1/this.vol);

	// Circumcircle test
	var ccdir = zerovec();
	for (ic=0; ic<3; ic++)
		vec_add_to(ccdir,this.dirs[ic]);
	this.ccdir = Normalize(ccdir);

	var ccdsq = 0;
	for (ic=0; ic<3; ic++)
		ccdsq += ptdist(this.ccdir,Positions[verts[ic]]);
	ccdsq /= 3;
	this.ccdsq = ccdsq;
}

// For copying in vertex info from another triangle
TriangleObject.prototype.copy_vert_info = function(src)
{
	this.verts = src.verts;
	this.dirs = src.dirs;
	this.vol = src.vol;
	this.ccdir = src.ccdir;
	this.ccdsq = src.ccdsq;
};

TriangleObject.prototype.IsVertexOrderCorrect = function()
{
	return this.vol >= 0;
};

TriangleObject.prototype.IsPointInside = function(p)
{
	 for (var ic=0; ic<3; ic++)
	 	if (dotprd(p,this.dirs[ic]) < 0) return false;

	 return true;
};

TriangleObject.prototype.IsPointInCircumcircle = function(p)
{
	return (ptdist(this.ccdir,p) < this.ccdsq);
};

TriangleObject.prototype.IsVertex = function(ix)
{
	for (var ic=0; ic<3; ic++)
		if (ix == this.verts[ic]) return true;
	return false;
};

TriangleObject.prototype.VertexIndexIn = function(ix)
{
	for (var ic=0; ic<3; ic++)
		if (ix == this.verts[ic]) return ic;
	return -1;
};

TriangleObject.prototype.EdgeIndexIn = function(ed)
{
	for (var ic=0; ic<3; ic++)
		if (EdgesEqual(this.edges[ic], ed)) return ic;
	return -1;
};

function EdgeObject(verts)
{
	this.verts = verts;
	this.polys = new Array(2);
}

EdgeObject.prototype.IsVertex = function(ix)
{
	for (var ic=0; ic<2; ic++)
		if (ix == this.verts[ic]) return true;
	return false;
};

EdgeObject.prototype.VertexIndexIn = function(ix)
{
	for (var ic=0; ic<2; ic++)
		if (ix == this.verts[ic]) return ic;
	return -1;
};

EdgeObject.prototype.PolyIndexIn = function(pl)
{
	for (var ic=0; ic<2; ic++)
		if (TrianglesEqual(this.polys[ic],pl)) return ic;
	return -1;
};

function EdgeCheckObject(Positions,verts)
{
	this.verts = verts;
	this.pdst = ptdist_ix(Positions,verts[0],verts[1]);
	this.direc = Normalize(crsprd_ix(Positions,verts[0],verts[1]));
	var midpnt = zerovec();
	vec_add_to(midpnt,Positions[verts[0]]);
	vec_add_to(midpnt,Positions[verts[1]]);
	this.midpnt = Normalize(midpnt);
}

// Check on the possible intersection with another edge-check object
// return a boolean of whether or not it does
EdgeCheckObject.prototype.intersects = function(Positions,other)
{
	// Assume that sharing a vertex means non-intersecting
	for (var ic=0; ic<2; ic++)
		for (var ict=0; ict<2; ict++)
			if (this.verts[ic] == other.verts[ict]) return false;

	// Find intersection point; will test it and its antipode
	var itsc = Normalize(crsprd(this.direc, other.direc));

	// Find dot product with midpoints to test if the intersection
	// is in the near hemispheres of the lines' midpoints.
	// If it is in both near hemispheres or both far hemispheres, it's OK
	// In both far hemispheres: antipode is in both near hemispheres
	var near0 = dotprd(itsc,this.midpnt) > 0;
	var near1 = dotprd(itsc,other.midpnt) > 0;
	if (near1 != near0) return false;

	var pd0 = [];
	var pd;
	for (ic=0; ic<2; ic++)
	{
		pd = ptdist(itsc, Positions[this.verts[ic]]);
		pd0.push(pd);
	}
	var pd1 = [];
	for (ic=0; ic<2; ic++)
	{
		pd = ptdist(itsc, Positions[other.verts[ic]]);
		pd1.push(pd);
	}
	var mxpd0 = max(pd0[0],pd0[1]);
	var mxpd1 = max(pd1[0],pd1[1]);
	if ((mxpd0 <= this.pdst) && (mxpd1 <= other.pdst) && near0) return true;

	// Handle its antipode; use antipode-related shortcuts
	// like reversing the distance value and the hemisphere-presence value
	vec_mult_scalar_to(itsc, -1);
	near0 = !near0;
	for (ic=0; ic<2; ic++)
	{
		pd0[ic] = - pd0[ic];
		pd1[ic] = - pd1[ic];
	}
	mxpd0 = max(pd0[0],pd0[1]);
	mxpd1 = max(pd1[0],pd1[1]);
	if ((mxpd0 <= this.pdst) && (mxpd1 <= other.pdst) && near0) return true;

	return false;
};

// Adds to an array if it was not already present;
// Must resort to this kludge because JavaScript doesn't have sets
function AddUnique(arr, x)
{
	for (var i=0; i<arr.length; i++)
		if (x == arr[i]) return;
	arr.push(x);
}

// Version for edges, since testing equality of objects
// doesn't work that well in JavaScript
function AddUniqueEdge(arr, ed)
{
	for (var i=0; i<arr.length; i++)
		if (EdgesEqual(arr[i],ed)) return;
	arr.push(ed);
}

// Find the set intersection
function FindShared(arr1, arr2)
{
	var resarr = [];
	for (var i1=0; i1<arr1.length; i1++)
	{
		var x1 = arr1[i1];
		for (var i2=0; i2<arr2.length; i2++)
		{
			var x2 = arr2[i2];
			if (x1 == x2)
			{
				resarr.push(x1);
				break;
			}
		}
	}

	return resarr;
}

// Version for edges
function FindSharedEdges(arr1, arr2)
{
	var resarr = [];
	for (var i1=0; i1<arr1.length; i1++)
	{
		var x1 = arr1[i1];
		for (var i2=0; i2<arr2.length; i2++)
		{
			var x2 = arr2[i2];
			if (EdgesEqual(x1,x2))
			{
				resarr.push(x1);
				break;
			}
		}
	}

	return resarr;
}

// Takes all the members of of arr2 out of arr1
// and ignores the arr2 members not present in arr1
function FindSetDifference(arr1, arr2)
{
	if (arr2.length === 0) return;
	var diffarr = [];
	for (var i1=0; i1<arr1.length; i1++)
	{
		var x1 = arr1[i1];
		var AddThisOne = true;
		for (var i2=0; i2<arr2.length; i2++)
		{
			var x2 = arr2[i2];
			if (x2 == x1)
			{
				AddThisOne = false;
				break;
			}
		}
		if (AddThisOne) diffarr.push(x1);
	}

	// Clear the array
	arr1.splice(0,arr1.length);

	for (var i=0; i<diffarr.length; i++)
		arr1.push(diffarr[i]);
}

// Version for edges
function FindSetDifferenceEdges(arr1, arr2)
{
	if (arr2.length === 0) return;
	var diffarr = [];
	for (var i1=0; i1<arr1.length; i1++)
	{
		var x1 = arr1[i1];
		var AddThisOne = true;
		for (var i2=0; i2<arr2.length; i2++)
		{
			var x2 = arr2[i2];
			if (EdgesEqual(x1,x2))
			{
				AddThisOne = false;
				break;
			}
		}
		if (AddThisOne) diffarr.push(x1);
	}

	// Clear the array
	arr1.splice(0,arr1.length);

	for (var i=0; i<diffarr.length; i++)
		arr1.push(diffarr[i]);
}


// Is the graph (in the mathematical sense) self-consistent?
function TestConsistency(TriSet)
{
	var edge;
	var ic;
	var iv;
	var tri;
	var NumVerts;
	// Test self-consistency:
	var IsConsistent = true;
	for (var i=0; i<TriSet.triangles.length; i++)
	{
		tri = TriSet.triangles[i];
		for (ic=0; ic<3; ic++)
		{
			edge = tri.edges[ic];
			NumVerts = 0;
			for (iv=0; iv<3; iv++)
				if (edge.IsVertex(tri.verts[iv]))
					NumVerts++;
			if (NumVerts != 2) IsConsistent = false;
			if (edge.PolyIndexIn(tri) < 0) IsConsistent = false;
		}
	}

	for (i=0; i<TriSet.edges.length; i++)
	{
		edge = TriSet.edges[i];
		var NumOutside = 0;
		for (ic=0; ic<2; ic++)
		{
			tri = edge.polys[ic];
			if (IsNull(tri))
			{
				NumOutside++;
				continue;
			}
			NumVerts = 0;
			for (iv=0; iv<2; iv++)
				if (tri.IsVertex(edge.verts[iv]))
					NumVerts++;
			if (NumVerts != 2) IsConsistent = false;
			if (tri.EdgeIndexIn(edge) < 0) IsConsistent = false;
		}
		if (NumOutside > 1) IsConsistent = false;
	}
	return IsConsistent;
}

// Specified by index ix; returns whether it was possible to do so
function AddPointInside(TriSet, ix)
{
	var ic1;
	var Positions = TriSet.positions;
	var p = Positions[ix];

	var NumTris = TriSet.triangles.length;
	for (var j=0; j<NumTris; j++)
	{
		var tri = TriSet.triangles[j];
		if (tri.IsPointInside(p))
		{
			// Create three new triangles and their edges
			var eds = tri.edges;
			var trixs = [];
			for (var ic=0; ic<3; ic++)
				trixs.push(eds[ic].PolyIndexIn(tri));

			var newtris = Array(3);
			var neweds = Array(3);
			for (ic=0; ic<3; ic++)
			{
				ic1 = ic + 1;
				if (ic1 >= 3) ic1 -= 3;
				newtris[ic] = new TriangleObject(Positions,[tri.verts[ic],tri.verts[ic1],ix]);
				neweds[ic] = new EdgeObject([tri.verts[ic],ix]);
			}

			// Connect those triangles and edges
			for (ic=0; ic<3; ic++)
			{
				ic1 = ic + 1;
				if (ic1 >= 3) ic1 -= 3;
				newtris[ic].edges[0] = neweds[ic1];
				newtris[ic].edges[1] = neweds[ic];
				neweds[ic].polys[0] = newtris[ic];
				neweds[ic1].polys[1] = newtris[ic];
			}

			// Find which external edges go with which triangles
			for (ic=0; ic<3; ic++)
			{
				var ed = eds[ic];
				var trix = trixs[ic];
				for (var ict=0; ict<3; ict++)
				{
					var newtri = newtris[ict];
					numverts = 0;
					for (var iv=0; iv<2; iv++)
					{
						if (newtri.IsVertex(ed.verts[iv]))
							numverts++;
						if (numverts == 2)
						{
							ed.polys[trix] = newtri;
							newtri.edges[2] = ed;
							break;
						}
					}
				}
			}

			// Insert those triangles and edges into the lists
			TriSet.triangles[j] = newtris[0];
			for (ic=1; ic<3; ic++)
				TriSet.triangles.push(newtris[ic]);
			for (ic=0; ic<3; ic++)
				TriSet.edges.push(neweds[ic]);

			// All done; indicate that the point was added
			return true;
		}
	}

	// The point was inside no triangle, and thus was not added
	return false;
}

function ImproveTriangulation(TriSet)
{
	var ix;
	var Positions = TriSet.positions;
	var quad_verts = new Array(4);
	for (var itr=0; itr<100; itr++)
	{
		var numflips = 0;
		for (var i=0; i<TriSet.edges.length; i++)
		{
			var edge = TriSet.edges[i];
			var tris = edge.polys;

			// Skip over external edges
			if (IsNull(tris[0])) continue;
			if (IsNull(tris[1])) continue;

			// Find the containing quadrangle's vertices
			for (ic=0; ic<3; ic++)
			{
				ix = tris[0].verts[ic];
				if (!edge.IsVertex(ix)) break;
			}
			var ic1 = ic + 1;
			if (ic1 >= 3) ic1 -= 3;
			var ic2 = ic + 2;
			if (ic2 >= 3) ic2 -= 3;
			quad_verts[0] = ix;
			quad_verts[1] = tris[0].verts[ic1];
			quad_verts[3] = tris[0].verts[ic2];

			for (var ic=0; ic<3; ic++)
			{
				ix = tris[1].verts[ic];
				if (!edge.IsVertex(ix)) break;
			}
			quad_verts[2] = ix;

			// Are the non-edge points in the other triangles' circumcircles?
			var incc0 = tris[0].IsPointInCircumcircle(Positions[quad_verts[2]]);
			var incc1 = tris[1].IsPointInCircumcircle(Positions[quad_verts[0]]);
			if ((!incc0) && (!incc1)) continue;

			// Are the would-be triangles properly oriented?
			var newtri0 = new TriangleObject(Positions, [quad_verts[0],quad_verts[1],quad_verts[2]]);
			if (!newtri0.IsVertexOrderCorrect()) continue;
			var newtri1 = new TriangleObject(Positions, [quad_verts[0],quad_verts[2],quad_verts[3]]);
			if (!newtri1.IsVertexOrderCorrect()) continue;

			// If so, then flip
			numflips++;

			var ed;
			var ed03;
			var ed12;
			var edix03;
			var edix12;

			// Adjust the edge and triangle memberships:
			// 0-3 goes from 0 to 1, 1-2 goes from 1 to 0
			for (ic=0; ic<3; ic++)
			{
				ed = tris[0].edges[ic];
				if (EdgesEqual(ed,edge)) continue;
				else if (ed.IsVertex(quad_verts[3]))
				{
					ed03 = ed;
					edix03 = ic;
					break;
				}
			}
			for (ic=0; ic<3; ic++)
			{
				ed = tris[1].edges[ic];
				if (EdgesEqual(ed,edge)) continue;
				else if (ed.IsVertex(quad_verts[1]))
				{
					ed12 = ed;
					edix12 = ic;
					break;
				}
			}

			var trix0 = ed03.PolyIndexIn(tris[0]);
			var trix1 = ed12.PolyIndexIn(tris[1]);

			ed03.polys[trix0] = tris[1];
			ed12.polys[trix1] = tris[0];
			tris[0].edges[edix03] = ed12;
			tris[1].edges[edix12] = ed03;

			// Add the vertices
			tris[0].copy_vert_info(newtri0);
			tris[1].copy_vert_info(newtri1);
			edge.verts = [quad_verts[0], quad_verts[2]];
		}
		if (numflips === 0) break;
	}
}


function FindConvexHull(TriSet)
{
	var Positions = TriSet.positions;

	// Find boundary loop -- use as convex hull
	var NextVertex = {};
	var tri;
	var VtxStart = -1;
	for (var i=0; i<TriSet.edges.length; i++)
	{
		var edge = TriSet.edges[i];

		// Find a boundary one -- look for the triangle that it contains
		if (IsNull(edge.polys[0]))
		{
			if (IsNull(edge.polys[1]))
				continue;
			else
				tri = edge.polys[1];
		}
		else
		{
			if (IsNull(edge.polys[1]))
				tri = edge.polys[0];
			else
				continue;
		}

		// Ensure that the hull is in the same direction as the triangles
		var ix0 = edge.verts[0];
		var ix1 = edge.verts[1];
		var posdiff = tri.VertexIndexIn(ix1) - tri.VertexIndexIn(ix0);
		if (posdiff < 0) posdiff += 3;
		if (posdiff != 1)
		{
			var ixs = ix0;
			ix0 = ix1;
			ix1 = ixs;
		}

		NextVertex[ix0] = ix1;
		VtxStart = ix0;
	}

	if (VtxStart >= 0)
	{
		var ix = VtxStart;
		var hull = [ix];
		while(true)
		{
			var ixnext = NextVertex[ix];
			if (ixnext == VtxStart) break;
			hull.push(ixnext);
			ix = ixnext;
		}

		TriSet.hull = hull;
	}
}


// Finds the dual of the Delaunay triangulation
// Won't bother to do the sort of connectivity
// that was necessary for the Delaunay triangulation
function FindVoronoiDiagram(TriSet)
{
	var edge;
	var v0;
	var v1;
	var v2;
	var k;
	var ix;
	var vor_poly;
	var tri;
	var ic;
	var iv;
	var next_edge;
	var vt0;
	var vt1;
	var kx;
	var ky;
	var ptitscrd;
	var ptitsc;
	var itscpt;
	var vtdf;
	var nitx;
	var ix0;
	var VorBdLn;
	var vpln;

	// Special cases: 3 or fewer points
	if (TriSet.triangles.length == 1)
	{
		// A single triangle
		if (TriSet.hull.length == 3)
		{
			tri = TriSet.triangles[0];
			TriSet.vor_positions.push(tri.ccdir);
			for (k=0; k<3; k++)
			{
				kx = k + 1;
				if (kx >= 3) kx = 0;
				ky = k - 1;
				if (ky < 0) ky = 2;

				v1 = TriSet.positions[TriSet.hull[k]];
				v2 = TriSet.positions[TriSet.hull[kx]];
				var posdiff = vec_difference(v2,v1);
				TriSet.vor_positions.push(Normalize(crsprd(posdiff,tri.ccdir)));
				TriSet.vor_edges.push([0, k+1, 4]);

				ix = TriSet.hull[k];
				TriSet.vor_polygons[ix] = {};
				vor_poly = 	TriSet.vor_polygons[ix];
				var iy = TriSet.hull[ky];
				for (var l=0; l<3; l++)
				{
					edge = TriSet.edges[l];
					var shrd = FindShared([iy,ix],edge.verts);
					if (shrd.length == 2) break;
				}

				vor_poly.edges = [edge];
				vor_poly.triangles = [tri];
				vor_poly.boundary = [0, ky+1, 4, k+1];
			}
			var ept = vec_copy(tri.ccdir);
			vec_mult_scalar_to(ept,-1);
			TriSet.vor_positions.push(ept);
		}
		return;
	}
	else if (TriSet.triangles.length === 0)
	{
		// A biangle
		if (TriSet.hull.length == 2)
		{
			v0 = TriSet.positions[TriSet.hull[0]];
			v1 = TriSet.positions[TriSet.hull[1]];

			vt0 = zerovec();
			vec_add_to(vt0,v0);
			vec_add_to(vt0,v1);
			vt0 = Normalize(vt0);
			TriSet.vor_positions.push(vt0);

			vt1 = Normalize(crsprd(v0,v1));
			TriSet.vor_positions.push(vt1);

			vt2 = vec_copy(vt0);
			vec_mult_scalar_to(vt2,-1);
			TriSet.vor_positions.push(vt2);

			var vt3 = vec_copy(vt1);
			vec_mult_scalar_to(vt3,-1);
			TriSet.vor_positions.push(vt3);

			TriSet.vor_edges.push([0, 1, 2, 3, 0]);

			edge = TriSet.edges[0];
			for (k=0; k<2; k++)
			{
				ix = TriSet.hull[k];
				TriSet.vor_polygons[ix] = {};
				vor_poly = 	TriSet.vor_polygons[ix];
				vor_poly.edges = [edge];
				vor_poly.triangles = [0];
				if (k === 0)
					vor_poly.boundary = [0, 1, 2, 3];
				else if (k == 1)
					vor_poly.boundary = [0, 3, 2, 1];
			}
		}
		return;
	}

	// Create the array of Voronoi-vertex positions:
	// Add indices to the triangle objects for convenience
	for (i=0; i<TriSet.triangles.length; i++)
	{
		tri = TriSet.triangles[i];
		tri.index = i;
		TriSet.vor_positions.push(tri.ccdir);
	}

	// Voronoi edges: a cinch
	// Voronoi edges parallel original edges
	for (var i=0; i<TriSet.edges.length; i++)
	{
		edge = TriSet.edges[i];
		if (!IsNull(edge.polys[0]) && !IsNull(edge.polys[1]))
		{
			var vor_edge = [edge.polys[0].index, edge.polys[1].index];
			TriSet.vor_edges.push(vor_edge);
		}
	}

	// Voronoi polygons: -1 at ends means an open one

	// First, collect the edges and triangles at each vertex
	// Put them into vor_polygons, because each one
	// is for each original vertex
	for (i=0; i<TriSet.indices.length; i++)
	{
		ix = TriSet.indices[i];
		TriSet.vor_polygons[ix] = {};

		vor_poly = 	TriSet.vor_polygons[ix];
		vor_poly.edges = [];
		vor_poly.triangles = [];
		vor_poly.boundary = [];
	}

	for (i=0; i<TriSet.edges.length; i++)
	{
		edge = TriSet.edges[i];
		for (ic=0; ic<2; ic++)
			TriSet.vor_polygons[edge.verts[ic]].edges.push(edge);
	}

	for (i=0; i<TriSet.triangles.length; i++)
	{
		tri = TriSet.triangles[i];
		for (ic=0; ic<3; ic++)
			TriSet.vor_polygons[tri.verts[ic]].triangles.push(tri);
	}

	for (i=0; i<TriSet.indices.length; i++)
	{
		ix = TriSet.indices[i];
		vor_poly = 	TriSet.vor_polygons[ix];

		// First triangle
		var init_tri = vor_poly.triangles[0];
		tri = init_tri;
		vor_poly.boundary.push(tri.index);

		// First edge
		for (ic=0; ic<3; ic++)
		{
			edge = tri.edges[ic];
			if (edge.IsVertex(ix))
				break;
		}
		var init_edge = edge;

		// The next triangle and edge
		var IsInside = false;
		while(true)
		{
			iv = edge.PolyIndexIn(tri);
			tri = edge.polys[1-iv];
			if (IsNull(tri)) break;
			if (TrianglesEqual(tri,init_tri))
			{
				IsInside = true;
				break;
			}

			vor_poly.boundary.push(tri.index);

			for (ic=0; ic<3; ic++)
			{
				next_edge = tri.edges[ic];
				if (EdgesEqual(next_edge,edge)) continue;
				if (next_edge.IsVertex(ix))
				{
					edge = next_edge;
					break;
				}
			}
		}

		if (!IsInside)
		{
			vor_poly.boundary.reverse();
			tri = init_tri;

			// First edge the other way
			for (ic=0; ic<3; ic++)
			{
				edge = tri.edges[ic];
				if (EdgesEqual(edge,init_edge)) continue;
				if (edge.IsVertex(ix))
					break;
			}

			while(true)
			{
				iv = edge.PolyIndexIn(tri);
				tri = edge.polys[1-iv];
				if (IsNull(tri)) break;

				vor_poly.boundary.push(tri.index);

				for (ic=0; ic<3; ic++)
				{
					next_edge = tri.edges[ic];
					if (EdgesEqual(next_edge,edge)) continue;
					if (next_edge.IsVertex(ix))
					{
						edge = next_edge;
						break;
					}
				}
			}
		}

		// Add -1 on ends for open polygon:
		if (!IsInside)
		{
			vor_poly.boundary.reverse();
			vor_poly.boundary.push(-1);
			vor_poly.boundary.reverse();
			vor_poly.boundary.push(-1);
		}
	}

	// Handle the area outside of the convex hull
	if (TriSet.hull.length >= 3)
	{
		// Set up the initial boundary lines
		// The boundary lines contain:
		// Index of Voronoi vertex / triangle center / intersection (in VorPos)
		// Indices of original vertices on each side of the line
		var VorBdLns = [];
		var Positions = TriSet.positions;
		var hlen = TriSet.hull.length;
		for (ic=0; ic<hlen; ic++)
		{
			ix = TriSet.hull[ic];
			var icx = ic + 1;
			if (icx >= hlen) icx = 0;
			var ixa = TriSet.hull[icx];
			var edset1 = TriSet.vor_polygons[ix].edges;
			var edset2 = TriSet.vor_polygons[ixa].edges;
			var edsetshr = FindSharedEdges(edset1,edset2);
			edge = edsetshr[0];
			var tvrt = edge.polys[0].index;
			vt0 = Positions[ix];
			vt1 = Positions[ixa];
			vtdf = vec_difference(vt1,vt0);
			// Contains: triangle index (Voronoi vertex),
			// vertex index 1 (Voronoi region), position
			// vertex index 2 (Voronoi region), position,
			// great-circle normal
			VorBdLn = [tvrt, TriSet.vor_positions[tvrt], ix, vt0, ixa, vt1, vtdf];
			VorBdLns.push(VorBdLn);
		}

		// Find intersections

		while (VorBdLns.length > 3)
		{
			// Check all combinations of neighbors
			var n = VorBdLns.length;
			var itscpts = [];
			var ptitscs = [];
			for (k=0; k<n; k++)
				ptitscs.push([]);
			for (k=0; k<n; k++)
			{
				// Find the intersection point; use the convex hull's direction
				kx = k + 1;
				if (kx >= n) kx = 0;
				itscpt = Normalize(crsprd(VorBdLns[k][6],VorBdLns[kx][6]));
				vec_mult_scalar_to(itscpt,-1);
				ptitscs[k].push(itscpts.length);
				ptitscs[kx].push(itscpts.length);
				itscpts.push(itscpt);
			}
			// Find the intersection points that are the closest to their parent points
			for (k=0; k<n; k++)
			{
				ptitsc = ptitscs[k];
				if (ptitsc.length >= 2)
				{
					var dists = [];
					for (var kp=0; kp<ptitsc.length; kp++)
						dists.push(ptdist(itscpts[ptitsc[kp]],VorBdLns[k][1]));
					var dx = 0;
					var dmin = dists[dx];
					for (var dxi=0; dxi<dists.length; dxi++)
					{
						var dst = dists[dxi];
						if (dst < dmin)
						{
							dx = dxi; dmin = dst;
						}
					}
					ptitscrd = ptitsc[dx];
				}
				else if (ptitsc.length == 1)
					ptitscrd = ptitsc[0];
				else
					ptitscrd = -1;
				ptitscs[k] = ptitscrd;
			}

			var NewVorBdLns = [];
			for ( k=0; k<n; k++)
			{
				// Find all matched intersection points and add them
				kx = k + 1;
				if (kx >= n) kx = 0;
				ky = k - 1;
				if (ky < 0) ky = n - 1;
				// 0 is lone, 1 is leading, 2 is trailing
				// vorvtidx is the index of the Voronoi vertex
				var pstat = 0;
				ptitsc = ptitscs[k];
				if (ptitsc != -1)
				{
					var ptitsc_prev = ptitscs[ky];
					if (ptitsc == ptitsc_prev)
						pstat = 2;
					else
					{
						ptitsc_next = ptitscs[kx];
						if (ptitsc == ptitsc_next)
							pstat = 1;
					}
				}

				if (pstat === 0)
				{
					// Keep the Voronoi line without merging
					NewVorBdLns.push(VorBdLns[k]);
				}
				else if (pstat == 1)
				{
					// Merge the Voronoi lines and create a new one
					var VorBdLn0 = VorBdLns[k];
					var VorBdLn1 = VorBdLns[kx];
					itscpt = itscpts[k];
					var tvrt0 = VorBdLn0[0];
					var tvrt1 = VorBdLn1[0];
					var PointOK = (tvrt1 != tvrt0);
					if (PointOK)
					{
						nitx = TriSet.vor_positions.length;
						ix0 = VorBdLn0[2];
						vt0 = VorBdLn0[3];
						ix1 = VorBdLn1[4];
						vt1 = VorBdLn1[5];
						var dst_in;
						var dst_out;
						for (var m=0; m<n; m++)
						{
							var ptstm = ptdist(VorBdLns[m][3],itscpt);
							var mrl = m - k;
							while (mrl < 0) mrl += n;
							while (mrl >= n) mrl -= n;
							if (mrl <= 2)
							{
								if (dst_in === undefined)
									dst_in = ptstm;
								else if (ptstm < dst_in)
									dst_in = ptstm;
							}
							else
							{
								if (dst_out === undefined)
									dst_out = ptstm;
								else if (ptstm < dst_out)
									dst_out = ptstm;
							}
						}
						PointOK = (dst_in < dst_out);
					}
					if (PointOK)
					{
						vtdf = vec_difference(vt1,vt0);
						VorBdLn = [nitx, itscpt, ix0, vt0, ix1, vt1, vtdf];
						NewVorBdLns.push(VorBdLn);
						TriSet.vor_positions.push(itscpt);
						var ixi = VorBdLn0[4];
						// Should be equal:
						// ixi = VorBdLn2[2];
						TriSet.vor_edges.push([tvrt0, nitx]);
						TriSet.vor_edges.push([tvrt1, nitx]);
						// Add the point to the center Voronoi region and close it
						TriSet.vor_polygons[ixi].boundary.shift();
						vpln = TriSet.vor_polygons[ixi].boundary.length;
						TriSet.vor_polygons[ixi].boundary[vpln-1] = nitx;
						// Add the point to the left Voronoi region
						if (TriSet.vor_polygons[ix0].boundary[1] == tvrt0)
						{
							TriSet.vor_polygons[ix0].boundary.unshift(-1);
							TriSet.vor_polygons[ix0].boundary[1] = nitx;
						}
						else
						{
							vpln = TriSet.vor_polygons[ix0].boundary.length;
							if (TriSet.vor_polygons[ix0].boundary[vpln-2] == tvrt0)
							{
								TriSet.vor_polygons[ix0].boundary.push(-1);
								vpln = TriSet.vor_polygons[ix0].boundary.length;
								TriSet.vor_polygons[ix0].boundary[vpln-2] = nitx;
							}
						}
						// Add the point to the right Voronoi region
						if (TriSet.vor_polygons[ix1].boundary[1] == tvrt1)
						{
							TriSet.vor_polygons[ix1].boundary.unshift(-1);
							TriSet.vor_polygons[ix1].boundary[1] = nitx;
						}
						else
						{
							vpln = TriSet.vor_polygons[ix1].boundary.length;
							if (TriSet.vor_polygons[ix1].boundary[vpln-2] == tvrt1)
							{
								TriSet.vor_polygons[ix1].boundary.push(-1);
								vpln = TriSet.vor_polygons[ix1].boundary.length;
								TriSet.vor_polygons[ix1].boundary[vpln-2] = nitx;
							}
						}
					}
					else
					{
						NewVorBdLns.push(VorBdLn0);
						NewVorBdLns.push(VorBdLn1);
					}
				}
				else if (pstat == 2)
				{
					// Do nothing
				}
			}

			if (NewVorBdLns.length == VorBdLns.length) break;
			VorBdLns = NewVorBdLns;
		}

		// Special cases: only two or three points left
		if (VorBdLns.length == 2)
		{
			if (VorBdLns[0][0] != VorBdLns[1][0])
			{
				var VorLn = [];
				for (k=0; k<2; k++)
				{
					// Connecting line
					kx = VorBdLns[k][0];
					VorLn.push(kx);
					// Close the Voronoi region by deleting the end -1's
					kx = VorBdLns[k][2];
					TriSet.vor_polygons[kx].boundary.shift();
					TriSet.vor_polygons[kx].boundary.pop();
				}
				TriSet.vor_edges.push(VorLn);
			}
		}
		else if (VorBdLns.length == 3)
		{
			var ic0 = VorBdLns[0][0];
			var ic1 = VorBdLns[1][0];
			var ic2 = VorBdLns[2][0];
			if (ic0 != ic1 && ic0 != ic2 && ic1 != ic2)
			{
				nitx = TriSet.vor_positions.length;
				v0 = VorBdLns[0][3];
				v1 = VorBdLns[1][3];
				v2 = VorBdLns[2][3];
				itscpt = zerovec();
				vec_add_to(itscpt,crsprd(v0,v1));
				vec_add_to(itscpt,crsprd(v1,v2));
				vec_add_to(itscpt,crsprd(v2,v0));
				itscpt = Normalize(itscpt);
				vec_mult_scalar_to(itscpt,-1);
				TriSet.vor_positions.push(itscpt);
				for (k=0; k<3; k++)
				{
					// Connecting line
					VorBdLn = VorBdLns[k];
					TriSet.vor_edges.push([VorBdLn[0], nitx]);
					// Add the point to the Voronoi region and close it
					ix = VorBdLn[2];
					TriSet.vor_polygons[ix].boundary.shift();
					vpln = TriSet.vor_polygons[ix].boundary.length;
					TriSet.vor_polygons[ix].boundary[vpln-1] = nitx;
				}
			}
		}
	}

	// Adjust the orientations
	for (k=0; k<TriSet.vor_polygons.length; k++)
	{
		vor_poly = TriSet.vor_polygons[k];
		if (vor_poly.boundary.length >= 3 && vor_poly.boundary[0] >= 0)
		{
			tri = new TriangleObject(TriSet.vor_positions,vor_poly.boundary.slice(0,3));
			if (!tri.IsVertexOrderCorrect())
				vor_poly.boundary.reverse();
		}
	}
}


function FindDelaunayTriangulationIndexed(Positions, Indices)
{
	var ic1;
	var ix1;
	var edge;
	var echk;
	// Create the triangle-set object
	var TriSet = {};
	TriSet.positions = Positions;
	TriSet.indices = Indices;
	TriSet.triangles = [];
	TriSet.edges = [];
	TriSet.hull = [];
	TriSet.vor_positions = [];
	TriSet.vor_edges = [];
	TriSet.vor_polygons = {};

	// Create the first triangle, if it is possible to create any
	if (Indices.length < 3)
	{
		if (Indices.length == 2)
		{
			TriSet.edges.push(new EdgeObject(Indices));
			TriSet.hull = Indices;
		}
		FindVoronoiDiagram(TriSet);
		return TriSet;
	}

	var tri = new TriangleObject(Positions, Indices.slice(0,3));
	if (!tri.IsVertexOrderCorrect())
		tri = new TriangleObject(Positions, [Indices[0],Indices[2],Indices[1]]);
	TriSet.triangles.push(tri);

	var echs = new Array(3);

	for (var ic=0; ic<3; ic++)
	{
		ic1 = ic + 1;
		if (ic1 >= 3) ic1 -= 3;
		ix = Indices[ic];
		ix1 = Indices[ic1];
		var vts = [ix, ix1];
		edge = new EdgeObject(vts);
		var echeck = new EdgeCheckObject(Positions,vts);
		echeck.edge = edge;
		echs[ic] = echeck;
		tri.edges[ic] = edge;
		edge.polys[0] = tri;
		TriSet.edges.push(edge);
	}

	// Place those crossing checkers in a boundary object;
	// will have to use various kludges since JavaScript doesn't have sets
	var BoundaryVerts = Indices.slice(0,3);
	var BoundaryEdges = echs;
	var Verts = Object;
	for (ic=0; ic<3; ic++)
	{
		ic1 = ic + 2;
		if (ic1 >= 3) ic1 -= 3;
		ix = Indices[ic];
		Verts[ix] = [echs[ic],echs[ic+1]];
	}

	// Add points until it is no longer possible
	for (var i=3; i<Indices.length; i++)
	{
		var ix = Indices[i];

		// If possible, add the point inside
		if (AddPointInside(TriSet, ix)) continue;

		// Point was not inside
		Verts[ix] = [];
		var NewEdges = [];
		var VertsAddedTo = [];
		var EdgesToDelete = [];

		// Find all the non-intersecting edges
		for (var j=0; j<BoundaryVerts.length; j++)
		{
			ix1 = BoundaryVerts[j];
			echk = new EdgeCheckObject(Positions, [ix, ix1]);
			var DoesIntersect = false;
			for (var k=0; k<BoundaryEdges.length; k++)
			{
				var echk1 = BoundaryEdges[k];
				DoesIntersect = echk.intersects(Positions,echk1);
				if (DoesIntersect) break;
			}
			if (DoesIntersect) continue;

			edge = new EdgeObject(echk.verts);
			echk.edge = edge;
			AddUniqueEdge(NewEdges,echk);
			AddUniqueEdge(Verts[ix],echk);
			AddUnique(VertsAddedTo,ix);
			AddUniqueEdge(Verts[ix1],echk);
			AddUnique(VertsAddedTo,ix1);
		}

		// Add the new vertex itself
		AddUnique(BoundaryVerts,ix);

		// Find all the triangles
		for (j=0; j<BoundaryEdges.length; j++)
		{
			echk = BoundaryEdges[j];
			var echks = [];

			for (var iv=0; iv<2; iv++)
			{
				var vset = FindSharedEdges(Verts[ix],Verts[echk.verts[iv]]);
				if (vset.length === 0) continue;
				echks.push(vset[0]);
			}
			if (echks.length < 2) continue;

			var empt_indx = -1;
			for (iv=0; iv<2; iv++)
			{
				if (IsNull(echk.edge.polys[iv]))
				{
					empt_indx = iv;
					break;
				}
			}
			if (empt_indx < 0) continue;

			var oldtri = echk.edge.polys[1-empt_indx];
			var v0 = echk.verts[0];
			var i0 = oldtri.VertexIndexIn(v0);
			var v1 = echk.verts[1];
			var i1 = oldtri.VertexIndexIn(v1);
			var i01 = i1 - i0;
			var NewTriVerts;
			if (i01 < 0) i01 += 3;
			if (i01 == 1)
			{
				// Order in original: other, v0, v1
				NewTriVerts = [ix, v1, v0];
			}
			else if (i01 == 2)
			{
				// Order in original: other, v1, v0
				NewTriVerts = [ix, v0, v1];
			}
			tri = new TriangleObject(Positions, NewTriVerts);
			if (!tri.IsVertexOrderCorrect()) continue;

			// Add the new triangle
			// Also, add the new edges,
			// or remove them from the lists if necessary
			TriSet.triangles.push(tri);
			echk.edge.polys[empt_indx] = tri;
			tri.edges[0] = echk.edge;
			tri.edges[1] = echks[0].edge;
			tri.edges[2] = echks[1].edge;
			AddUniqueEdge(EdgesToDelete, echk);

			for (iv=0; iv<2; iv++)
			{
				var echki = echks[iv];
				if (IsNull(echki.edge.polys[0]))
				{
					echki.edge.polys[0] = tri;
					TriSet.edges.push(echki.edge);
				}
				else
				{
					echki.edge.polys[1] = tri;
					AddUniqueEdge(EdgesToDelete,echki);
				}
			}
		}

		// Add the new edges and remove the edges and vertices
		// that are now in the interior
		for (j=0; j<NewEdges.length; j++)
			AddUniqueEdge(BoundaryEdges,NewEdges[j]);
		FindSetDifferenceEdges(BoundaryEdges, EdgesToDelete);

		var BoundaryVertsToRemove = [];
		for (j=0; j<VertsAddedTo.length; j++)
		{
			var ixa = VertsAddedTo[j];
			FindSetDifferenceEdges(Verts[ixa],EdgesToDelete);
			if (Verts[ixa].length === 0)
				BoundaryVertsToRemove.push(ixa);
		}
		FindSetDifference(BoundaryVerts, BoundaryVertsToRemove);
	}

	// Improve it iteratively
	ImproveTriangulation(TriSet);

	// Find the boundary line of this region
	FindConvexHull(TriSet);

	// Find the regions around each point:
	FindVoronoiDiagram(TriSet);

	return TriSet;
}

function FindDelaunayTriangulation(Positions)
{
	var Indices = new Array(Positions.length);
	for (var i=0; i<Indices.length; i++)
		Indices[i] = i;

	return FindDelaunayTriangulationIndexed(Positions, Indices);
}

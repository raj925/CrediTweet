function authorCred(f, p, d, v){
  var cred1;
  var cred2;
  var cred3;
  var cred4;
  if (p == false)
  {
    cred2 = 1;
  }
  else
  {
    cred2 = 0;
  }
  if(d == "")
  {
    cred3 = 0;
  }
  else
  {
    cred3 = 1;
  }
  if (v == true)
  {
    cred4 = 1;
  }
  else
  {
    cred4 = 0;
  }
  if (f > 10000000)
  {
    cred1 = 7;
  }
  else if (f == 0)
  {
    cred1 = 0;
  }
  else
  {
    cred1 =  Math.round(Math.log10(f)*10)/10;
  }
  var max = (followersWeight*7) + picWeight + descripWeight + verWeight;
  var score = (followersWeight*cred1) + (picWeight*cred2) + (descripWeight*cred3) + (verWeight*cred4);
  return (score/max);
}

function tweetCred(u, l, r){
  var cred1;
  var cred2;
  var cred3;
  if (u == "NA")
  {
    cred1 = 0;
  }
  else
  {
    cred1 = 1;
  }
  if (l > 10000)
  {
    cred2 = 4;
  }
  else if (l == 0)
  {
    cred2 = 0;
  }
  else
  {
    cred2 =  Math.round(Math.log10(l)*10)/10;
  }
  if (r > 10000)
  {
    cred3 = 4;
  }
  else if (r == 0)
  {
    cred3 = 0;
  }
  else
  {
    cred3 =  Math.round(Math.log10(r)*10)/10;
  }
  var max = urlWeight + (likeWeight*4) + (retweetWeight*4);
  var score = (urlWeight*cred1) + (likeWeight*cred2) + (retweetWeight*cred3);
  return (score/max);
}

function writingQuality(g, c, s)
{
  var max = (grammarWeight*5) + (complexWeight*5) + (spellingWeight*5);
  var score = (grammarWeight*g) + (complexWeight*c) + (spellingWeight*s);
  return (score/max);
}

function overallCred(a, t, w)
{
    var cred = (a*authorWeight)+(t*tweetWeight)+(w*writingWeight);
    return Math.round(cred*1000)/10;
}
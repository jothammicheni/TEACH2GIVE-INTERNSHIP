import './App.css';
import Card from './components/Card';
import styles from './components/card.module.css';
import image from './assets/shoe.jpg'
function App() {
  return (
    <div className={styles.container}>
      <Card className={styles.imageWrapper}>
        <img src={image} className={styles.image} alt="Description" />
        
      </Card>
      <Card className={styles.detailsWrapper}>
        <h1>Men sport shoes</h1>
        <div>More info</div>
        <h2>Description</h2>
        <hr className={styles.divider1} />
        <hr className={styles.divider2} />
        <hr className={styles.divider3} />

        <Card className={styles.colorCardHolder}>
          <Card className={styles.colorCard} color='#020000' />
          <Card className={styles.colorCard} color='#0831f3' />
          <Card className={styles.colorCard} color='#f36b08' />
          <Card className={styles.colorCard} color='#d442e1' />
          <Card className={styles.colorCard} color='#ebcf09' />

        </Card>

        <Card className={styles.colorCardHolder}>
          <Card className={styles.sizecolorCard} color='#e0dfd9' >40</Card>
          <Card className={styles.sizecolorCard} color='#e0dfd9' >42</Card>
          <Card className={styles.sizecolorCard} color='#e0dfd9'>43</Card>
          <Card className={styles.sizecolorCard} color='#e0dfd9'>44</Card>
          <Card className={styles.sizecolorCard} color='#e0dfd9'>45</Card>
           
        </Card>

        <Card className={styles.buttonHolder}>
           <button className={styles.button}
            color='#001af6'
            >
              Buy
            </button>
            <p>$ 45.67</p>
        </Card>
      </Card>

    </div>
  );
}

export default App;

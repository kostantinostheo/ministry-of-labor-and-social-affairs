import React from 'react';
import {Grid, Advertisement, Image, Header, Container, Segment} from 'semantic-ui-react';
import remotework from '../../../images/remotework.gif';
import staysafegifbig from '../../../images/staysafegifbig.gif';
import './index.css';

export default function AnnualLeave() {
  return (
    <Grid centered>
      <Grid.Row centered className="strip-color">
        <Image src={remotework} size="big" />
      </Grid.Row>
      <Grid.Row centered>
        <br></br>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <Segment>
            <Header textAlign="center" as="h2">
              Άδεια και επίδομα αδείας
            </Header>
            <br></br>
            <p className="text-align">
              Οι μισθωτοί, οι οποίοι απασχολούνται με σχέση εξαρτημένης εργασίας σε οποιονδήποτε
              εργοδότη, δικαιούνται άδεια αναψυχής κάθε χρόνο ώστε να ξεκουραστούν και να επανέλθουν
              στην εργασία τους με περισσότερες δυνάμεις. Κατά τη διάρκεια της άδειας αυτής οι
              μισθωτοί πέρα από το μισθό τους δικαιούνται και επίδομα αδείας. Για να έχει δικαίωμα ο
              μισθωτός να λάβει την ανωτέρω άδεια, αρκεί να εργάζεται έναντι μισθού σε κάποιον
              εργοδότη, χωρίς να έχει σημασία ο τρόπος που αυτός καθορίζεται και καταβάλλεται.
              Σύμφωνα με το Ν. 3302/2004 για τη χορήγηση της άδειας υπάρχει διαφορετική αντιμετώπιση
              των νεοπροσληφθέντων και των παλαιών εργαζομένων. Σύμφωνα με το α. 1 του Ν. 3302/2004
              ορίζονται τα εξής:
            </p>
            <ul className="text-align">
              «1.α.) Κάθε μισθωτός από την έναρξη της εργασίας του σε υπόχρεη επιχείρηση και μέχρι
              τη συμπλήρωση δώδεκα (12) μηνών συνεχούς απασχόλησης, δικαιούται να λάβει ποσοστό της
              ετήσιας κανονικής άδειας με αποδοχές κατ’ αναλογία με το χρόνο εργασίας που έχει
              συμπληρώσει στην ίδια υπόχρεη επιχείρηση. Το ποσοστό αυτό υπολογίζεται με βάση ετήσια
              άδεια εικοσιτεσσάρων εργάσιμων ημερών ή αν στην επιχείρηση εφαρμόζεται σύστημα
              πενθήμερης εβδομαδιαίας εργασίας, είκοσι (20) εργάσιμων ημερών, χωρίς να υπολογίζεται
              σε αυτές η ημέρα της εβδομάδας κατά την οποία δεν απασχολούνται οι μισθωτοί λόγω του
              εφαρμοζόμενου συστήματος εργασίας.
            </ul>
            <ul className="text-align">
              1. β.) Ο εργοδότης υποχρεούται μέχρι τη λήξη του πρώτου ημερολογιακού έτους, εντός του
              οποίου προσελήφθη ο μισθωτός να χορηγεί σε αυτόν την παραπάνω αναλογία της κανονικής
              άδειας. Κατά το δεύτερο ημερολογιακό έτος, ο μισθωτός δικαιούται να λάβει την ετήσια
              κανονική άδεια με αποδοχές, η οποία αναλογεί στο χρόνο απασχόλησής του στην υπόχρεη
              επιχείρηση και υπολογίζεται σύμφωνα με το δεύτερο εδάφιο της περίπτωσης α΄. Η άδεια
              αυτή επαυξάνεται κατά μία (1) εργάσιμη ημέρα για κάθε έτος απασχόλησης επιπλέον του
              πρώτου μέχρι τις είκοσι έξι (26) εργάσιμες ημέρες ή μέχρι και τις είκοσι δύο (22)
              εργάσιμες ημέρες αν στην επιχείρηση εφαρμόζεται σύστημα πενθήμερης εβδομαδιαίας
              εργασίας. Για καθένα από τα επόμενα ημερολογιακά έτη, ο μισθωτός δικαιούται να λάβει
              από την 1η Ιανουαρίου εκάστου έτους, την κανονική ετήσια άδεια με αποδοχές, η οποία
              υπολογίζεται σύμφωνα με το προηγούμενο εδάφιο». Κατά τη διάρκεια της άδειας ο μισθωτός
              δικαιούται να λάβει από τον εργοδότη τις συνήθεις αποδοχές του, που θα ελάμβανε εάν
              πραγματικά απασχολούνταν στην επιχείρηση κατά τον αντίστοιχο χρόνο της άδειάς του,
              εκτός από την περίπτωση που ο μισθωτός δεν έχει συμπληρώσει ένα έτος από την πρόσληψή
              του. Στην περίπτωση αυτή ο νεοπροσληφθείς μισθωτός δικαιούται αποδοχές αδείας τόσα
              24/25 του μηνιαίου μισθού του όσες είναι και οι ημέρες άδειας που δικαιούται (οι
              οποίες προσδιορίζονται ανάλογα με το χρόνο εργασίας που έχει συμπληρώσει στην
              επιχείρηση). Όσον αφορά στο επίδομα αδείας που δικαιούται ο μισθωτός, οι διατάξεις του
              νόμου που αναφέρονται στο δικαίωμα του μισθωτού να λάβει κατά το πρώτο και δεύτερο
              ημερολογιακό έτος τμήμα ή τμήματα της ετήσιας άδειας, ανάλογα με το χρονικό διάστημα
              της απασχόλησης του, εφαρμόζονται και για το επίδομα αδείας. Συνεπώς, κατά το πρώτο
              ημερολογιακό έτος ο μισθωτός δικαιούται να λάβει επίδομα αδείας ίσο με 2 ημερομίσθια
              για κάθε μήνα εργασίας. Ωστόσο το επίδομα αδείας δεν μπορεί σε καμία περίπτωση να
              υπερβαίνει το ανώτατο επιτρεπόμενο από το νόμο όριο, δηλαδή το ½ του μηνιαίου μισθού
              του εργαζόμενου ή τα 13 ημερομίσθια. Οι αποδοχές του χρόνου αδείας όσο και το επίδομα
              αδείας πρέπει να προκαταβάλλονται από τον εργοδότη, δηλαδή να δίνονται κατά την έναρξη
              της άδειας του μισθωτού.
            </ul>
            <Header as="h5">
              Παρακάτω συνοψίζονται τα βασικά δικαιώματα των εργαζομένων με βάση τον Αστικό Κώδικα
              και την εργατική νομοθεσία:
            </Header>
            <Header as="h5">Απεργία:</Header>
            <p className="text-align">
              Σύμφωνα με το άρθρο 19 παρ. 1 του Ν. 1264/1982 η απεργία αποτελεί δικαίωμα των
              εργαζομένων, το οποίο ασκείται και κηρύσσεται από τις νόμιμες Συνδικαλιστικές
              Οργανώσεις, στις κάτωθι περιπτώσεις: «α) Σαν μέσο για τη διαφύλαξη και προαγωγή των
              οικονομικών, εργασιακών, συνδικαλιστικών και ασφαλιστικών συμφερόντων των εργαζομένων
              και σαν εκδήλωση αλληλεγγύης για τους αυτούς σκοπούς, και β) Σαν εκδήλωση αλληλεγγύης
              εργαζομένων επιχειρήσεων ή εκμεταλλεύσεων που εξαρτώνται από πολυεθνικές εταιρείες,
              προς εργαζόμενους σε επιχειρήσεις ή εκμεταλλεύσεις ή στην έδρα της ίδιας πολυεθνικής
              εταιρείας, και εφόσον η έκβαση της απεργίας των τελευταίων θα έχει άμεσες επιπτώσεις
              στα οικονομικά ή εργασιακά συμφέροντα των πρώτων.» Για να είναι νόμιμη η απεργία
              απαραίτητη προϋπόθεση είναι η προειδοποίηση του εργοδότη ή της συνδικαλιστικής
              οργάνωσής του τουλάχιστον είκοσι τέσσερις (24) ώρες πριν από την πραγματοποίηση της,
              στην οποία πρέπει να αναφέρεται η ημέρα και η ώρα έναρξης της απεργίας. Αν δεν
              τηρηθούν οι διατυπώσεις που ορίζει ο νόμος η απεργία είναι παράνομη. Στην περίπτωση
              αυτή είναι δυνατή η απαγόρευση και η διακοπή της απεργίας με δικαστική απόφαση καθώς
              και η επιβολή χρηματικής ποινής σε βάρος της συνδικαλιστικής οργάνωσης που κήρυξε την
              απεργία.
            </p>
            <Header as="h5">Αναστολή εργασίας:</Header>
            <p className="text-align">
              Σύμφωνα με το άρθρο 656 του Αστικού Κώδικα: «Αν ο εργοδότης έγινε υπερήμερος ως προς
              την αποδοχή της εργασίας ή αν η αποδοχή της εργασίας είναι αδύνατη από λόγους που τον
              αφορούν και δεν οφείλονται σε ανώτερη βία, ο εργαζόμενος έχει το δικαίωμα να απαιτήσει
              το μισθό, χωρίς να είναι υποχρεωμένος να παράσχει την εργασία σε άλλο χρόνο».
            </p>
            <Header as="h5">Δικαίωμα αποζημίωσης σε περίπτωση απόλυσης:</Header>
            <p className="text-align">
              Το δικαίωμα του εργοδότη να απολύσει τους μισθωτούς μπορεί να ασκηθεί οποτεδήποτε. Για
              να είναι όμως έγκυρη η απόλυση μισθωτού, ο οποίος συνδέεται με σύμβαση εργασίας
              αορίστου χρόνου τουλάχιστον δύο (2) μηνών, πρέπει να συντρέχουν οι κάτωθι διατυπώσεις:
              <ol>
                <li>να έχει γίνει έγγραφη καταγγελία.</li>
                <li>να καταβληθεί η νόμιμη αποζημίωση.</li>
                <li>
                  να έχει καταχωρηθεί η απασχόληση του απολυόμενου στα τηρούμενα για το Ι.Κ.Α
                  μισθολόγια ή να έχει ασφαλιστεί ο απολυόμενος.
                </li>
              </ol>
              Σε περίπτωση μη τήρησης των ανωτέρω διατυπώσεων η σύμβαση εργασίας εξακολουθεί να
              ισχύει και παράγει όλες τις έννομες συνέπειες και ο εργοδότης που αρνείται να
              αποδεχθεί τις υπηρεσίες του μισθωτού καθίσταται υπερήμερος σύμφωνα με τα άρθρα 349-350
              Α.Κ. Ο μισθωτός που απολύθηκε δικαιούται μαζί με την αποζημίωση της απόλυσης του να
              λάβει ως αποζημίωση και τις αποδοχές αδείας και του επιδόματος αδείας που δεν έλαβε
              για το ημερολογιακό έτος που γίνεται η απόλυσή του.
            </p>
            <Header as="h5">Πιστοποιητικό εργασίας:</Header>
            <p className="text-align">
              Άρθρο 678 Α.Κ.: «Κατά τη λήξη της σύμβασης ο εργαζόμενος μπορεί να απαιτήσει από τον
              εργοδότη πιστοποιητικό για το είδος και τη διάρκεια της εργασίας του. Μόνο αν το
              ζητήσει ο εργαζόμενος βεβαιώνεται και η ποιότητα της εργασίας του και η διαγωγή του».
              Ο εργοδότης υποχρεούται να προβεί στην έκδοση του πιστοποιητικού, χωρίς να ερευνήσει
              το λόγο ή το σκοπό για τον οποίο ζητείται η χορήγησή του. Εάν ο εργοδότης αρνηθεί να
              χορηγήσει το πιστοποιητικό, ο μισθωτός μπορεί να προσφύγει στα δικαστήρια και να
              ζητήσει την έκδοση ή τη διόρθωσή του.
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}>
          <a
            href="https://covid19.gov.gr/category/oikonomia-ergasia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Advertisement centered unit="half page">
              <Image src={staysafegifbig} />
            </Advertisement>
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

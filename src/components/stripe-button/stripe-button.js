import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HYHhGChek0fTgpVqV0eRkSWT9RPg8d3EkRpW9XX2dRNOaV4b9oS1Af14YsUrvO2Ti9ZROPmBpbzPObMONRBxRVo00HVUHSgxr';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Chaners Store Ltd.'
      billingAddress
      shippingAddress
      // image='https//svgshare.com/i/cuz.svg'
      image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUTExMRFhIVEhgVGBUYFxUSGBgXFhIiGBcVFxYaHSghHRolGxUVITEjJSkrLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGi8mICU1LTArNSsuLS03LS0vLi8tMC8tLy0tLS8tLS0tLS0tLS8vLS0tLS0tLS01LS0tLS0tLf/AABEIALABHgMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABLEAABAwIDAwcGCQkGBwAAAAABAAIDBBEFEiEGMUEHE1FhcYGRFCIyobHBNFJicnOCkrKzCCMlM0JDY6LxFRYkk8LTU1RkpNLU8P/EABsBAQADAQEBAQAAAAAAAAAAAAAEBQYDAgEH/8QAOhEBAAEDAgEKBAUDAwUBAAAAAAECAxEEBSESMTJBYXGBkbHRIlGhwQYTFELwIzThM0PxJFJTcpIV/9oADAMBAAIRAxEAPwDuKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPL3gC5IA6TogiqnajD43ZJKykY/4rpomnwLroJYFB9QEBAQEBAQEGOadjBd7mtHS4ho8SgiJdr8MabOrqIEcDUQg+GZBlo9psPlOWKspJHdDJonnwDkEqCg+oCAgICAg1qvEIIgTLLFGBvL3tYB4lBgwzG6SoLhT1FPMW2zCKRkuW+6+Um17HwQSCAgICAgICAgg8S2ww2AlstXTtcLgtztc64NiMoub9VkIjM4hDTcp+H/uhVTaXGWCRgPfKGhcK9VZp56480q3odTX0bc+WPVFVPKfOf1OHutb0pp2R/yxtf7Qo1e56enmnPdHvhMt7Jq6ueIjvn2yjarbnFn+iaSEW4RvmcOwuc0epRqt4p/bR9f+U2j8PVfuuR4R/lF1GLYjJfnK+pIPBnNwDu5tgI8VGq3e9PNEQm29g01PSmZ+nojJsOY83lMkp6ZZJJvvuKjVbhqKuery4Jlva9HRzW48ePqxV1BGIJWsYxt4njzWhu9h6F4tXqpu0zVMzxj1dr9m3FiummmIzE80di1UvK0X83T0kLXOjhbzkkxLWlwa0eY1tyRe+pstLqtTTp6eVVGWK0Oiq1dc00zjEZepNucXO51EwdUMjyO8yj2Kuneaeqj6/wCFvT+Hauu59P8ALUftPi7t9aG/Mp4W/fDiudW8V9VEef8Aw7U/h63+65PhER7tZ2K4ifSr6s9nNM+7GFynd73VEfzxd6dh00c8zPi1ZOfdfPVVzr9NTOB4NcAuc7nqJ6/pDtTsujj9ufGfdoVuHR5Hk53EMcbufI86N6XOK8067UVVxE1Tzvde26Si3OLcc09vq7tswSaOmzEk+TxXJNyTzYuSelalhWltRthR0IAmeXSv9CCMZ5X9jRuGh1dYda81VRTGapxD1RRVXVFNMZmXPsU20xOp9Ato4visyyzEfKlcMrexo71UX92pjhajPbLQaXYKqvivzjsj3V2XDY3nNLmmf8aZzpj4vJt3Ksua+/Xz1eXBeWds0trmojx4+rPHTMb6LWjsACjzcqnnlMpoop5oh4noYn6PjY7taD7l9pvV0dGqYea7NuuMVUxPfDNh01TTG9JUSxfwyTNCeoxPuB9XKVPs7peo6XxR/OtVanZNPcjNHwz2c3l7YdA2S2/bNzkdY2Knkha1xk5wcy9riQCC6xa67Xeab7rglXun1FN+jlUstrNJXpbnIrmPBvVPKPhLNBUtkPRCySo9cbSB3ldKrlNHSmI73Gi1cr6FMz3RlGVPKjD+5pKyTTQkRwjvzuB9Sj1a/T089f39EyjatXXzUT44j7oublHxB3oUlNFpvfM+Y+DWNHrUardrMc0TKbb2DUT0qoj6oup2pxeTfVsjHRDAxv8ANIXn2KNVvFX7aPOf+Eyj8PUfvuT4Rj3RlS+ol/XVdZJpYgzPjafqxlo9SjVbpqJ5piPD3TaNk0lPPTM98z9sNRuE04N+aYT0kZj4m5UarV3queufNNt6LTW+jbjyWrk0IbibmgWzULj9idn+4rjaKs0VR2s9+IYxct4+UutK3Z0QEBAQEBBUOVpkxwqqML3sexjX5mEtdlY8OeLjX0QUHG9hpGvpWmwzNc5pNhc63F+4hZfdImnUT8p4tps1yKtLHzjMLDlVdla5MqZMmVMmTKmTJlTJljnZ5rvmn2L7TPxQ81zmmVD2G+FuH8AeoNWj3j/Rie1k9hnGomOz7w6BlWby12TKmTJlTJkypky1sTb+Zl+if9wrpZn+pT3x6uV+f6VXdPoue2G25w+ipYIAH1s8EbYmnUMGQN51w7dw4kHgCtnXXFFM1Vc0Pz23RVXVFFPPKj4dhpYXSSOMtRIc0sztXOcevg0cB1LJ6vWV6irM83VDc6HQ29LRiOl1z/OpvZVEynZMqZMmVMmTKmTLBWziNheQTbcBqXEmzWtHEkkADrXSzbqu1xRTzy5X79Nm3NyrmhU8fwqeixOBtSQ50zI5HD9hpkuzIL6HJuv1LT37EUaWaKOqPTj9WO02qmvW03bnXOPPh9FyDLLKZbaOD7lTJkypkyZUyZMqZMmVMmUrsK/LisXyqSob/PE7/Sr3ZZ6fh92a/EP+3Pf9nXVeM2ICAgICAg1cUo2zQywuF2yxPjI6ntLT7UH5m5Oy5j6indvY69utpLHexqod6o6FffH8+rR7Dd6dvun3+y75VQ5aLJlTJkypkyZUyZauIVYiaCWyOLnBrWsaXuc47gGjfuXfT2K79fIo53DU6qjT0cuvmfaCkxOoLWxYdO1rtOcnIga3rcLF3gLq1t7LX+6uPCM+ynub9R+yiZ75x7qhgmFPpcWmp3uDnxxlpIuATZp0vw1Uvd+Gnjvj7oWyz/1Uz2T6wvGVZjLWZMqZMmVMmTKmTLTxgWgm+hf9wrtp/wDVp749XK/P9Krun0QdXUGfG359RDAxjB0BkLW6d7nHvK0e7VTTp+HXMMrstMTqYmeqJWjKstlr8mVMmXiUhrS43sATp1C6+0xypiHyqvkxMvFLsvjFXTipppqFrXtDmRh3OOsRfK6SxaH9XTotNb2izTHx5mfJlLu96iqfgxEeaubOY9O6d9JVMDJ2Fw3ZfOYbOYRuvvNxpp4wNw2+mzT+Zb5utY7ZulV+r8u7z9U/NfdgsG8rqzUOF6akeWsHCSotq7rEYP2nfJU3atLyKPzaueebu/ygbzrfzK/yqZ4Rz9s/4RX5SGHkeR1bd7XOiJ8Hs8Mr/FW0xmMSpaZmmcwxUUokjZINz2NcPrNv71h7lPIrmmeqZh+g2rsXKKa464iWbKvGXvJlTJkypkyZUyZRv9oSOe6OCkq53NcWkxxksDgL2L93EKysbZdu0xXmIiVXqN4s2a5oxMzC37BbO15qo6uohbTsjbI0RufnldnaG6gCzRpfeTpuV1odD+mzPKznsUO4bj+riI5OMdrp6sFYICAgICAgIOTYlyPyurp6qCtELZnueW81ncM5zPFy63pXO5cr1mi9Tya4zDrZv3LNXKtziVO5WNlpsNhheK6pldLI5pvaMABt9A0+9c6dHYp5qI8nSrW6irnrnzWGJvmjsHsWKqnjLb0zwh7yr5l9yZUyZZMGjzYlQN/jSvPYykk18S3xV1skZu1T2fdSb5V/Spjt+zsS0rMvzpi+m0lWOm/4TCqreP7bxha7NONT4SsuVZXLWZYayZsbHyOvlY0uNtTZoubL3bpmuuKI554PFy5Fuia55o4oCTbKAfuav/KA9rlaRs2o+cec+yrne9P8p8o932n2pMhtFRVzza9mxZjbpsCV6jZb3/dH19nmd8s9VM/T3b8MGIVgfBHh1ZGXxvHOTMMEYu21y9w69wuV2s7PcouU1TVHCYlxu71brommKZ4wiOUXD5cMxdlQ5pMMzGHMBobRhkzQekEZvrNVvrLH59maOvq71Po9R+Reivq6+5aKeVkjQ9hDmuFwRqCFi66aqKppqjEw2tFymumKqZzEsmVecvWTKmTLSOExBxewOikO98T3wuPaWEX77qXa1+otcKauHbx9UO9odPd41U8ezh6IbFdk3yT+UtqpfKLg535ZCSBYXNgToLa3U2N4qrp5F6iJiflwQp2imirl2a5iY8V/2T20io4YqappjBExoYJ43GaG/F8hsHsJcSSSCLnUq5024WL/AMNM4n5TwUup2+/Y+KqMx844+ay7e7MsxWh5hsrW3cyWOUDnG3HHQi4LXOFweKnIKnYdyQVLWNY/FJQ1osGxxNZp0XJuotWisVVTVNETMpdOu1FNMUxXMRCg7HmQVlZE6SSQRPLGl7i42bKW36L2HBVO82qLdFHIiI4zzLbZr1yuuvl1TPNzrjlVBloMmVMmTKmTK68lEYFBm/4lVUv/AO5c0epoW40sYsUR2R6MNq6uVfrntn1XFd0cQEBAQEBAQEBBxv8AKU+DUn07/wANB6hb5o7B7F+fVTxlvKZ4Q9ZF8y+5MiZMtzZKIHFYPkUlQ/vc+Jo9RctFsMcLk933UG+VZmiO/wCzqi0ChfnbaBttppx8b/1Qfcqzd4/6Wrw9VjtU41MePotORZDLWZeJqdr2lrgC1wIIO4gixBX2muaZiqOeHyqIqiaZ5pan9h03GFh7Rm9qkzr9TP8AuT5o0aLTx+yPJI7HYfDFiVMYoo48zJwcjWsuObBsbDXVXGy37lyuvl1TPCOecqrd7NuiinkUxHHqjDrq0ChRG1GzlNXwOgqGZmHVrho5jrWD2Hg4X9xuEHFq7k4xrDXk0RFVTk3yaBwF/wBqMka9bDqomp0VnUR8ccfnHOl6bW3dP0J4fKeZH/31MTubrKWeB/WD42cAbdl1S3djuRxt1RPfwXFre6J6dOO7imaDaWim9Cdlz+y67D4OtfuVbd0OotdKifDj6LC3r7Fzo1R48PVLhqiZSuUZEyZCxMmW5sXixoqhlM4/4OofkjBOkE7vRY3ojfqA3g61t61O1a+b0fl3OlHX8492Z3TRRan8yjmnq+U+zqiuVQ/NeyI/SOI/Tv8Ax3Kh33oUd8rzZJ+OvuhdMizeWhyZEyZHCwv0Jzk1L1yasAwylPxos/23F/8AqX6BRGKYhha5zVM9srMvTwICAgICAgICAg43+Up8GpPp3/hoM8LfNb80exfndU8ZbimeEPeVecvuTKmTKS2CbfEZtPQo2C/0kzv9tarYqf6NVXzn7M7vFWbtMdjpCvFQ/Pm2DLbUHraD40ZVdu39pX4esJ22/wBzT4+krTlWKy1eTKmTKuYltfBFK+Hmqh8jCAQxgcNQDob9atdPtN6/RFyJjE/z5K+/udq1XNExOYWTYKSWeqhqXRGCGNso/PPYx7i5oaLRXzW36mw0V3tu316Wqqapic/JU6/XU6imIpiYw6qydh0Dmk9RBVsrGQlBxPEdsK3Ea2oipp3w0VO7K18dg58jbhrs/Ft7uy7iA2+9Vm5a/wDS008nnmfp1+yfodH+oqnlc0eroWymPxV0XM1LY/KoxaaBwDgeAlYD6Ubt4I3XsdQpti/ReoiuieEol21VarmivnaOOclGD1IJ8nELyPThJit15PQ8Wrs5uRbB0z46uqijldJSRPcxrj6LiJLNc3hcgE6dIWe338uKaeHxT6LvZ5ucqrj8P3XvKs1lfZMqZMo7aGM+TSub6bGGVnz4vzjD9poUzQXZo1NE9sR58EbWU8uxXHY7Hh9SJIo5BufG147HNB963THvztsaP0jiP0z/AMdyz+/9CjvldbN06vBd8qzOV/kypky1sTkDIZXnc2J7vssJ9y62Y5dymn5zHq8Xa+TRM/KJdM2PpuboKSPiykhae0RAH1r9BYlLoCAgICAgICAgION/lKfBqT6d/wCGg3YW+a35o9i/OKp4y2lM8HvKvOXrJlTJlKcm7SauvdwDaWLvax8h9UzVstkpxpYn5zPt9mZ3SrOonsiHQFbq9wDbkW2nb1sZ66YhV26/2lfh6wmbfONRT4+krXlWHy1WTKmTLVnwuB5JfDC4neXMY4ntJC606i7TGKapjumXOq1bqnM0x5MH93qL/lab/Jj/APFdP1uo/wDJV/8AU+7x+ms/9keUNasw6npzDPHDFG6Oqp3Z2Max2U1DWvF2gaFrnXVjtWrvVaqmmuuZic88zPVKFuFi3FiZppiJ4c0R81x5ZNqDR0JjjJ8oqiYIwDZwDhZ7xx0BABHFzVrpmIjMs9EZnEKhsngopaZkdvPIzPPS92/w0HcsHr9V+ovzX1c0d384tXpLMWbUU9fX3t6tw2OUtLgQ9mrJGudHIw/IkaQ4dxXPT6u7p5zbqx/Pk93rFu9GK4y8y0c72c3JXYg+K1iwzBtxa2Vz2tD3C3S434qxq33UzGOEeH+cfRDjarETnj5stFQxwsDImNYwbgBbv6z1qqu3q7tXKrnMrC3RTbp5NMYhnyrnl7yZUyZaG0EmSlndxEL7DpJYQ0d5ICk6Snl36Ke2PVw1FfJtVT2S6tglMY6aCM72QRsPa2MD3L9AZB+ftiR+kcR+mf8AjuWe/EHQo75XG0dKrwXrKsvlfZMqZMozaZp8knA3uicwdrxlH3lM2+OVqrcdsI2sqxYr7pdjp2Wa0dDQPALeskyICAgICAgICAgION/lKfBqT6d/4aCUgb5rfmj2L81qn4pbCmeD3lXnL1kypkymOTOI2rXn9utsPqU8bPct5tUY0dv+dcsxrpzqKv51LqrBEcD5RW22lgPTHH91zfcoG6f2lzuStFOL9K35VgstRkypkyZUyZMqZMoramEmjnA3804jtAuPWApegr5Optz2wj6qOVZqjslAtxA4xirqwj/CUrWshBuPP3g26c2Z32AtNver/Ks/lUzxq9Ovz5vNTbbY5dzlzzR6rnlWOy0OTKmTJlTJkypkyZUyZMqZfMtbDcPNdVshGtNTSNlqHb2uew5oqcHic1nu6A0A+ktNsWinP6iuP/X3+yn3LVRj8qnx9nVlplM/Omwo/SWJfTP/AB3LO/iHoUd8rbaelV4L9lWVyvMmVMmUdjjCWRtG99VTR/bqmN96s9njlayjx9JQtfVixU68tyzQgICAgICAgICAgpnKfsOcVgjjbMInxPL2ktzNddtrGxuOGvqQc6qMI2mofSijrIhxZ57rDqGV97fJKp7+yaa5xpzTPZ7SnW9wvUcJ497XpOUeAO5uqhmp5BvBaXAHrGjh4Knv7Bfp425ir6T7fVOt7nbnpRhasNxemnF4Zo39QcL97d48FUXtNes/6lMwm0X6K+jOVp5MWHyN7z+8rKl3c2pdGPVGt7oaeTprcdkejOaic3ap7ZW1SnFwjlTs3aKjJIAMERJ3fvJB7lB3KM6S5j5JGlnF6nvTNbtJQxaSVMII4BwcfstuVibWh1Nzo258vdf16q1Tz1Q04tq2y/BaWtqb7jHC7L9p1lYWth1VXSxHfPsjV7lajmzLdjo8em/VUMEA0s6omB0+ZHqFYWvw7R/uVz4cPXKNXulX7afNvwbAYrJ8IxGOIcW08Xskfr6lPt7NpKP2575Rq9ffq68dzPNyRUphla6oq5pnxOax9RJzrWPI0eIwBuPTdWFuxat9CmI7oiEaq5XV0pmXL6KqrsDk8mrYLwOcXCRguCTvcx+gdu9E2PYqzc9qjVfHTOKvpPsl6TWzZ+GY4OhYTitPUszwyNeONt46nN3g9qx+o092xVyblOP51Ly3eouRmmW9lXDLpkypkyZUyZYqqdkbS+RzWMG9ziGgd5Xuiiqurk0Rmex5qrimMzLBhlDV19uYD4KQ+lVPblfI3/pmHX67hboBWl0Gx8Yr1Hl7+yq1O4/ttefs6Ng2FQ0sTYYWBsbeG8knUucTq5xOpJ1K00RERiFRnLdX0cWxjkrxSCpmqcOqozz0jnujeMh855dl3FrtSdfNUfUaW1qKeTcjLravV2pzRKGn2lxaj0xDD3ho3yRg5e9wLmHuIVJf/D1E8bVcx38Vhb3SqOnHklML27w6a353m3fFlGT+b0fWqe/tGrtftzHZx/z9E63r7NfXjvS9QBJPQNaQ5rsQidcG4tE1028dcQUnYaJ/Vzyo5on7R93Hca4mzw65dXWyUQgICAgICAgICAgICDSxTCKaoblnhilb0PY1/hcaIKVUcjWDmVsjI5Y7ODixsjsjtb2865A7CF8mM84vGGYfDTxNhhYGRsvlaL2F3FxOupJJJJ6SvvMNpBWtpNg8NrpWzVUJkkazIDnkZ5oJIByOG4uPig28M2Tw6n/U0lOwjiI2l2nyiL3QTQQEBAQauJYdDURmKaNkkbt7XAOH9etBy7GeRGHPzuH1UtK/g05pG9gfmDgO3MvFdum5HJrjMdr1TVNM5iWgNmNqYNA+kqW8LuaDbtIYb95VVd2PSV8YiY7p98pVGvvU9ee9sx020u44dTdvPxj1B5USfw5a6q5+jt/+lX8ob9Nstj036yaipWm2rGOqZB06Os31rva2DS08asz449Pd4q3C7PNiFlwbk/pIntlmMlVUN3STnOGnpZEPMbuGtr9e9W1nT2rMYt0xHch13a65zVOVtXZ4EBAQCEFWx7k8wqr1lpYw/wCPHeF1+kllr990GDZPk2w6gfzkTXvkDi5r5HFxZdpb5oFhuLtbX1XzEZyZXBfQQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGOSUBB5bUtQPKWoPnlTUH3ylqD55U3rKB5U3rQffKWoDahpQPKWoPnlTUHtkwKDIgICAgICAgICAgICAgICAgICAgICAgICDVqcwNwL6Ed6DUMZy2sb5ib6Aa79EHtzjp5u7N6xYIDnuO9vT622HruUHy7tPN0BB8BY+JQLnMCA7Qa3Op1/og+RghpGU5jxQHZiAANRx0104hAkDiSSDwAH/3eg9G+a9nZRw00uOHBAEjr3y9A1tewHHTeSgyQtcTc9AHgNSg//9k='
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel = 'Pay Now'
      token={onToken}
      // locale='zh'
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;
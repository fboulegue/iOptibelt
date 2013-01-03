//
//  ViewController.m
//  iOptibelt
//
//  Created by Fabian Boulegue on 03.10.11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import "ViewController.h"

@implementation ViewController





- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
}
////////////////////////////////////////////////////////////////////////CUSTOM_CODE////////////////////////////////////////////////////////////////////////
- (void)viewDidLoad
{
    [super viewDidLoad];
//Stop Bounce for WebView
    for (id subview in webview.subviews)
        if ([[subview class] isSubclassOfClass: [UIScrollView class]])
            ((UIScrollView *)subview).bounces = NO;
//First Start Alert
    NSLog(@"first alert"); 
    NSString *start_alert = [[NSUserDefaults standardUserDefaults] objectForKey:@"alert_start"];
    if(start_alert == nil)
    {
        [[NSUserDefaults standardUserDefaults] setValue:@"1" forKey:@"alert_start"];
        [[NSUserDefaults standardUserDefaults] synchronize];
        
        UIAlertView *alert_start = [[UIAlertView alloc] initWithTitle:@"iOptibelt" 
                                                              message:@"On some points this application need a internet connection." 
                                                             delegate:self 
                                                    cancelButtonTitle:@"OK"
                                                    otherButtonTitles:nil];
        [alert_start show];
        [alert_start release];
    }
      
//Load HTML Start Page
    [webview loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"home-de" ofType:@"html"]isDirectory:NO]]];
     NSLog(@"webview fertig");
//Check Loading
    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(checkLoad) userInfo:nil repeats:YES];
//Check !Loading
    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(checkNotLoad) userInfo:nil repeats:YES];

}
//Activity Indicator animate
-(void) checkLoad {if (webview.loading){ 
    [active startAnimating]; NSLog(@"lade");
    }
}
//Activity Indicator !animate
-(void) checkNotLoad {if (!(webview.loading)){
    [active stopAnimating]; NSLog(@"lade nicht");
    }
}
//TeleButton
- (IBAction)tele_button:(id)sender{
    NSLog(@"it's connected!");
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"phone" ofType:@"html"]isDirectory:NO]];
    [webview loadRequest:theRequest]; 
}
//MailButton
- (IBAction)mail_button:(id)sender{
    NSLog(@"it's connected!");

    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"mailto://info@optibelt.com"]];
}
//WebButton
- (IBAction)web_button:(id)sender{
    NSLog(@"it's connected!");
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL URLWithString: @"http://optibelt.com"]];
    [webview loadRequest:theRequest]; 
}
//HomeButton
- (IBAction)news_button:(id)sender{
    NSLog(@"it's connected!");
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"home-de" ofType:@"html"]isDirectory:NO]];
    [webview loadRequest:theRequest]; 
}
////////////////////////////////////////////////////////////////////////CUSTOM_CODE////////////////////////////////////////////////////////////////////////
- (void)viewDidUnload
{
    [super viewDidUnload];
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated
{
	[super viewWillDisappear:animated];
}

- (void)viewDidDisappear:(BOOL)animated
{
	[super viewDidDisappear:animated];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
